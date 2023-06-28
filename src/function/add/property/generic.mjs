import { function_is } from '../../is.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_prefix_property } from '../../../js/identifier/prefix/property.mjs';
import { function_input_named_value } from '../../input/named/value.mjs';
import { js_code_identifier_value } from '../../../js/code/identifier/value.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_input_add_type } from '../../input/add/type.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_add_with_statement_code } from '../with/statement/code.mjs';
import { js_code_return_statement } from '../../../js/code/return/statement.mjs';
import { js_code_call_expression } from '../../../js/code/call/expression.mjs';
import { function_add_string_prefix } from '../string/prefix.mjs';
import { function_exists } from '../../exists.mjs';
import { not } from '../../../not.mjs';
import { js_identifier_combine } from '../../../js/identifier/combine.mjs';
export async function function_add_property_generic(property_prefix, property_name, lambda, method, input_value_add) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        function_is,
        arguments_assert_todo,
        boolean_is
    ]);
    let property_name_fn_get_prefix = js_identifier_prefix_property(property_prefix);
    let property_name_fn_get = js_identifier_combine(property_name_fn_get_prefix, property_name);
    let v_2 = await function_exists(property_name_fn_get);
    let v = not(v_2);
    if (v) {
        await function_add_string_prefix(property_name_fn_get_prefix, property_name);
    }
    let property_name_get = js_code_call_expression(property_name_fn_get);
    const value_name = js_code_identifier_value();
    let function_name = js_identifier_combine(property_name_fn_get, method);
    let expression_code = lambda(property_prefix, property_name_get, value_name);
    let statement_code = js_code_return_statement(expression_code);
    let result = await function_add_with_statement_code(function_name, statement_code);
    let v_3 = function_name_get(defined_is);
    await function_input_add_type(function_name, property_prefix, v_3);
    if (input_value_add) {
        await function_input_named_value(function_name);
    }
    return result;
    metadata([]);
}