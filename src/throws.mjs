import { arguments_assert_todo } from './arguments/assert/todo.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let errored = false;
    try {
        lambda();
    } catch (e) {
        errored = true;
    }
    return errored;
}