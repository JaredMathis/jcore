import { string_is } from '../../is.mjs';
import { string_sub_max } from '../max.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_sub_max_3(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result = string_sub_max(left, right);
    return result;
}