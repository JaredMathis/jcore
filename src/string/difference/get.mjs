import { string_difference_get_recursive } from './get/recursive.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_difference_get(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = string_difference_get_recursive(left, right, 0, 0);
    return v;
}