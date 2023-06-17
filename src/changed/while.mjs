import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { changed } from '../changed.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function changed_while(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = changed(lambda);
    return result;
}