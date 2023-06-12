import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_last } from '../../last.mjs';
import { list_length } from '../../length.mjs';
export function list_last_or_null(list) {
    arguments_assert(arguments, [list_is]);
    let parent = null;
    const value = 1;
    if (list_length(list) >= value) {
        parent = list_last(list);
    }
    return parent;
    metadata([]);
}