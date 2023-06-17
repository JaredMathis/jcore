import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_add_with_statement_code } from '../with/statement/code.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_add_property_get(function_name, statement_code) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await function_add_with_statement_code(function_name, statement_code);
    return result;
}