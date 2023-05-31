import { metadata } from '../../metadata.mjs';
import { list_add_all } from '../add/all.mjs';
export function list_all_combine(concats) {
    let concat = [];
    for (let list of concats) {
        list_add_all(concat, list);
    }
    return concat;
    metadata([]);
}