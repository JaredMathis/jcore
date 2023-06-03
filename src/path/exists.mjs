import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import fs from 'fs';
export function path_exists(file_path) {
    arguments_assert(arguments, [tautology]);
    if (false)
        file_path_is;
    return fs.promises.access(file_path, fs.constants.F_OK).then(() => true).catch(() => false);
    metadata([]);
}