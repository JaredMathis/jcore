import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import path from 'path';
export function path_resolve(file_path) {
    arguments_assert(arguments, [tautology]);
    return path.resolve(file_path);
    metadata([]);
}