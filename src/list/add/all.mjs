import { metadata } from '../../metadata.mjs';
import { list_add } from '../add.mjs';
export function list_add_all(list, list_other) {
    for (let o of list_other) {
        list_add(list, o);
    }
    metadata([]);
}