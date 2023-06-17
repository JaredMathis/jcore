import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_add_with_statement_code } from '../with/statement/code.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_code_call_expression } from '../../../js/code/call/expression.mjs';
import { js_code_statement } from '../../../js/code/statement.mjs';
export async function function_add_property_get(function_name, property_prefix, property_name_fn_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let expression_code = js_code_call_expression_object_property_get(property_prefix, js_code_call_expression(property_name_fn_get));
    let statement_code = js_code_statement(expression_code);
    let result = await function_add_with_statement_code(function_name, statement_code);
    return result;
}