import { integer_odd_is } from '../../integer/odd/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { string_split_at } from '../split/at.mjs';
export function string_repeat_is(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let length = string_length(input);
    if (integer_odd_is(length)) {
        return false;
    }
    string_split_at();
}