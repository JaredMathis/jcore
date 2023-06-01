import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_max } from '../../max.mjs';
import { list_length_is_0 } from '../../length/is/0.mjs';
export function list_max_or_0(test_ids_all_number) {
    arguments_assert(arguments, [tautology]);
    let max;
    if (list_length_is_0(test_ids_all_number)) {
        max = 0;
    } else {
        max = list_max(test_ids_all_number);
    }
    return max;
    metadata([]);
}