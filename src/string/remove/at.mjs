import { integer_is } from '../../integer/is.mjs';
import { string_is } from '../is.mjs';
import { string_split_at_skip } from '../split/at/skip.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { comment } from '../../comment.mjs';
import { string_add } from '../add.mjs';
export function string_remove_at(s, index) {
    arguments_assert(arguments, [
        string_is,
        integer_is
    ]);
    comment(`we're removing a single character so 1`);
    let offset = 1;
    let {left, right} = string_split_at_skip(s, index, offset);
    let result = string_add(left, right);
    return result;
}