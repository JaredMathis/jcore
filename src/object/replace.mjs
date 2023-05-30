import { object_merge } from './merge.mjs';
import { object_property_all_delete } from './property/all/delete.mjs';
export function object_replace(object, replacement) {
    object_property_all_delete(object);
    object_merge(replacement, object);
}