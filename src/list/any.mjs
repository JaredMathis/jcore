import { metadata } from '../metadata.mjs';
export function list_any(list, predicate) {
    for (let a of list) {
        if (predicate(a)) {
            return true;
        }
    }
    return false;
    metadata([]);
}