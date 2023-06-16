import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function try_catch_throw_async(lambda_try, lambda_catch) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    try {
        await lambda_try();
    } catch (e) {
        await lambda_catch(e);
        throw e;
    }
}