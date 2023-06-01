import { list_find_generic } from '../generic.mjs';
export function list_find_or_null(list, predicate) {
    let or_null = true;
    let result = list_find_generic(list, predicate, or_null);
    return result
}