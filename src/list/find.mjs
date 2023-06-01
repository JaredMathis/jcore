import { list_find_generic } from './find/generic.mjs';
import { metadata } from '../metadata.mjs';
export function list_find(list, predicate) {
    let or_null = false;
    return list_find_generic(list, predicate, or_null);
    metadata([]);
}