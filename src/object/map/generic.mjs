import { metadata } from '../../metadata.mjs';
import { object_merge_filtered } from '../merge/filtered.mjs';
export function object_map_generic(object, lambda) {
    let v_2 = {};
    let v = object_merge_filtered(object, lambda, v_2);
    return v;
    metadata([]);
}