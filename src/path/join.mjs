import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import path from 'path';
export function path_join(paths) {
    arguments_assert(arguments, [tautology]);
    return path.join(...paths);
    metadata([]);
}