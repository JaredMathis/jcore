import { path_parse_generic } from './generic.mjs';
import { metadata } from '../../metadata.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { path_is } from '../is.mjs';
export function path_parse_base(file_path) {
    arguments_assert(arguments, [path_is]);
    let v_2 = 'base';
    let v = path_parse_generic(file_path, v_2);
    return v;
    metadata([]);
}