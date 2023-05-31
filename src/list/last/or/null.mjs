import { metadata } from '../../../metadata.mjs';
import { list_last } from '../../last.mjs';
import { list_length } from '../../length.mjs';
export function list_last_or_null(stack) {
    let parent = null;
    if (list_length(stack) >= 1) {
        parent = list_last(stack);
    }
    return parent;
    metadata([]);
}