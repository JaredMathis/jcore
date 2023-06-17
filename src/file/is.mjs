import { not } from '../not.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { directory_is } from '../directory/is.mjs';
export async function file_is(file_path) {
    arguments_assert(arguments, [path_is]);
    return not(await directory_is(file_path));
}