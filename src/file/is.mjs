import { path_is } from '../path/is.mjs';
import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { directory_is } from '../directory/is.mjs';
export async function file_is(file_path) {
    arguments_assert(arguments, [path_is]);
    return !await directory_is(file_path);
}