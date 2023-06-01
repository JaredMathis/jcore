import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
import { error } from '../error.mjs';
import { file_overwrite } from './overwrite.mjs';
export async function file_write(file_path, contents) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    if (await path_exists(file_path)) {
        error('file already exists: ' + file_path);
    }
    await file_overwrite(file_path, contents);
    metadata([]);
}