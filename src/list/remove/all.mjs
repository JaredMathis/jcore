import { metadata } from '../../metadata.mjs';
import { list_remove } from '../remove.mjs';
export function list_remove_all(list, values) {
    for (let v of values) {
        list_remove(list, v);
    }
    metadata([]);
}