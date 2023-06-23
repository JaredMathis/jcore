import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_exists } from '../../../../function/exists.mjs';
export async function functions_new_if_not_exists(lambda_function_new_get, lambda_function_new, identifiers) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let needed = lambda_function_new_get(identifiers);
    for (let n of needed) {
        if (!await function_exists(n)) {
            await lambda_function_new(n);
        }
    }
}