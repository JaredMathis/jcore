import { string_length_max } from '../../length/max.mjs';
import { string_is } from '../../is.mjs';
import { string_sub_max_asymmetrical } from './asymmetrical.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_sub_max_3(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result1 = string_sub_max_asymmetrical(left, right);
    let result2 = string_sub_max_asymmetrical(right, left);
    return string_sub_max_to_result(string_length_max(result1, result2), left, right);
}