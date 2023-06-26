import { metadata } from '../../metadata.mjs';
export function json_to_generic(object, space) {
    let v_2 = null;
    let v = JSON.stringify(object, v_2, space);
    return v;
    metadata([]);
}