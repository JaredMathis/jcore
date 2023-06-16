import { integer_is } from '../../integer/is.mjs';
import { string_is } from '../is.mjs';
import { string_left_right } from '../left/right.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { comment } from '../../comment.mjs';
export function string_remove_at(s, index) {
    arguments_assert(arguments, [
        string_is,
        integer_is
    ]);
    comment(`we're removing a single character so 1`);
    let offset = 1;
    let {left, right} = string_left_right(s, index, offset);
    return result;
}