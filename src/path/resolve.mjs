import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import path from 'path';
import { path_is } from './is.mjs';
export function path_resolve(file_path) {
    arguments_assert(arguments, [path_is]);
    let v = path.resolve(file_path);
    return v;
    metadata([]);
}