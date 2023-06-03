import { list_contains } from '../../list/contains.mjs';
import { object_merge_filtered } from '../merge/filtered.mjs';
export function object_map_without(object, values_without) {
    return object_merge_filtered(object, key => !list_contains(values_without, key), {});
}