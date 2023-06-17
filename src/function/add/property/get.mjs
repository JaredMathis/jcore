import { js_code_return_statement } from '../../../js/code/return/statement.mjs';
import { function_input_add_type } from '../../input/add/type.mjs';
import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { function_add_with_statement_code } from '../with/statement/code.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_code_call_expression } from '../../../js/code/call/expression.mjs';
import { list_join } from '../../../list/join.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { function_name_get } from '../../name/get.mjs';
import { defined_is } from '../../../defined/is.mjs';
export async function function_add_property_get(property_prefix, property_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let property_name_fn_get = list_join([
        property_prefix,
        'property',
        property_name
    ], function_name_separator());
    let expression_code = js_code_call_expression_object_property_get(property_prefix, js_code_call_expression(property_name_fn_get));
    let statement_code = js_code_return_statement(expression_code);
    let function_name = list_join([
        property_name_fn_get,
        'get'
    ], function_name_separator());
    let result = await function_add_with_statement_code(function_name, statement_code);
    await function_input_add_type(function_name, property_prefix, function_name_get(defined_is));
    return result;
}