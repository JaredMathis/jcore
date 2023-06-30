import { metadata } from '../../metadata.mjs';
import { path_parse_generic } from './generic.mjs';
import { path_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function path_parse_name(file_path) {
    arguments_assert(arguments, [path_is]);
    let v_2 = 'name';
    let v = path_parse_generic(file_path, v_2);
    return v;
    metadata([]);
}