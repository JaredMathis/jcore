import { string_identifier_combine } from '../../../string/identifier/combine.mjs';
import { not } from '../../../not.mjs';
import { function_add_string_prefix } from '../string/prefix.mjs';
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
import { function_exists } from '../../exists.mjs';
export async function function_add_property_get(property_prefix, property_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let property_name_fn_get_prefix = string_identifier_combine(property_prefix, 'property');
    let property_name_fn_get = string_identifier_combine(property_name_fn_get_prefix, property_name);
    if (not(await function_exists(property_name_fn_get))) {
        await function_add_string_prefix(property_name_fn_get_prefix, property_name);
    }
    let v = js_code_call_expression(property_name_fn_get);
    let expression_code = js_code_call_expression_object_property_get(property_prefix, v);
    let statement_code = js_code_return_statement(expression_code);
    let v_2 = function_name_separator();
    let function_name = list_join([
        property_name_fn_get,
        'get'
    ], v_2);
    let result = await function_add_with_statement_code(function_name, statement_code);
    let v_3 = function_name_get(defined_is);
    await function_input_add_type(function_name, property_prefix, v_3);
    return result;
}