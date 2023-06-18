import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import fs from 'fs';
import { path_is } from './is.mjs';
export function path_exists(file_path) {
    arguments_assert(arguments, [path_is]);
    let v = fs.promises.access(file_path, fs.constants.F_OK).then(() => true).catch(() => false);
    return v;
    metadata([]);
}