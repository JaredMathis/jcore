import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_max } from '../../max.mjs';
import { list_length_is_0 } from '../../length/is/0.mjs';
export function list_max_or_0(list) {
    arguments_assert(arguments, [list_is]);
    let max;
    if (list_length_is_0(list)) {
        max = 0;
    } else {
        max = list_max(list);
    }
    return max;
    metadata([]);
}