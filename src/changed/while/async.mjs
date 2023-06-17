import { changed } from '../../changed.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function changed_while_async(lambda) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    do {
        result = changed(lambda);
    } while (result);
}