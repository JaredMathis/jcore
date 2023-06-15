import { object_merge_filtered } from '../merge/filtered.mjs';
export function object_map_generic(object, lambda) {
    return object_merge_filtered(object, lambda, {});
}