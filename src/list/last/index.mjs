import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
export function list_last_index(list) {
    const l = list_length(list);
    return l - 1;
    metadata([]);
}