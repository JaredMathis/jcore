import { list_filter } from '../../list/filter.mjs';
import { object_properties } from '../properties.mjs';
export function object_keys_without(value, excluded) {
    let all = object_properties(value);
    let filtered = list_filter(all, v => equal_not(v, excluded));
    return filtered;
}