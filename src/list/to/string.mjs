import { metadata } from '../../metadata.mjs';
import { list_join } from '../join.mjs';
export function list_to_string(prefixes) {
    let v = ',';
    let v_2 = list_join(prefixes, v);
    return v_2;
    metadata([]);
}