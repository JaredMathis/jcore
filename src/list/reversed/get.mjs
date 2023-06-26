import { metadata } from '../../metadata.mjs';
import { list_reverse } from '../reverse.mjs';
import { list_add_multiple } from '../add/multiple.mjs';
export function list_reversed_get(list) {
    let list_reversed = [];
    list_add_multiple(list_reversed, list);
    list_reverse(list_reversed);
    return list_reversed;
    metadata([]);
}