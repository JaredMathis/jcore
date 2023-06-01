import { metadata } from '../metadata.mjs';
import { list_filter } from './filter.mjs';
import { list_single } from './single.mjs';
export function list_find(list, predicate) {
    let or_null = false;
    let filtered = list_filter(list, predicate);
    if (or_null) {

    }
    return list_single(filtered);
    metadata([]);
}