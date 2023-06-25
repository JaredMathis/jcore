import { integer_value_0 } from '../../../integer/value/0.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_max } from '../../max.mjs';
import { list_empty } from '../../empty.mjs';
export function list_max_or_0(list) {
    arguments_assert(arguments, [list_is]);
    let max;
    if (list_empty(list)) {
        max = integer_value_0();
    } else {
        max = list_max(list);
    }
    return max;
    metadata([]);
}