import { metadata } from '../../metadata.mjs';
import { list_add_multiple } from '../add/multiple.mjs';
export function list_all_combine(concats) {
    let concat = [];
    for (let list of concats) {
        list_add_multiple(concat, list);
    }
    return concat;
    metadata([]);
}