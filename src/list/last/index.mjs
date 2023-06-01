import { subtract_1 } from '../../subtract/1.mjs';
import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
export function list_last_index(list) {
    const l = list_length(list);
    return subtract_1(l);
    metadata([]);
}