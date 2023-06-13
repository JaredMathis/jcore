import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function count_async(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = 0;
    then(counter);
    function counter() {
        result++;
    }
    return result;
}