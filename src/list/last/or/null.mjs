import { integer_value_1 } from '../../../integer/value/1.mjs';
import { list_length_at_least } from '../../length/at/least.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_last } from '../../last.mjs';
export function list_last_or_null(list) {
    arguments_assert(arguments, [list_is]);
    let parent = null;
    const value = integer_value_1();
    if (list_length_at_least(list, value)) {
        parent = list_last(list);
    }
    return parent;
    metadata([]);
}