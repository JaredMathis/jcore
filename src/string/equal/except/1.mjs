import { string_is } from '../../is.mjs';
import { string_equal_count } from '../count.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_equal_except_1(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result = string_equal_count(a, b);
    return result;
}