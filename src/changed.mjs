import { arguments_assert_todo } from './arguments/assert/todo.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function changed(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = false;
    lambda(() => {
        result = true;
    });
    return result;
}