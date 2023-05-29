import { array_filter } from "./filter.mjs";

export function array_find(list, predicate) {
    let filtered = array_filter(list, predicate);
    return array_single(filtered);
}