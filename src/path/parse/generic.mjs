import { object_property_get } from '../../object/property/get.mjs';
import { path_parse } from '../parse.mjs';
export function path_parse_generic(file_path, v_2) {
    let parsed = path_parse(file_path);
    let v = object_property_get(parsed, v_2);
    return v;
}