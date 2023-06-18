import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { path_is } from '../is.mjs';
import { path_parse } from '../parse.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function path_parse_base(file_path) {
    arguments_assert(arguments, [path_is]);
    let parsed = path_parse(file_path);
    let v = object_property_get(parsed, 'base');
    return v;
}