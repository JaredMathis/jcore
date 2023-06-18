import { at_least_once_async } from '../async.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function at_least_once_while_async(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    do {
        result = await at_least_once_async(lambda);
    } while (result);
}