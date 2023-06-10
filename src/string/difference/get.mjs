import { string_difference_get2_recursive } from './get2/recursive.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_difference_get(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return string_difference_get2_recursive(left, right, 0, 0);
}