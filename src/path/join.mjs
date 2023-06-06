import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import path from 'path';
import { list_is } from '../list/is.mjs';
export function path_join(paths) {
    arguments_assert(arguments, [list_is]);
    return path.join(...paths);
    metadata([]);
}