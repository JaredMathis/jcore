import { metadata } from '../metadata.mjs';
import { not } from '../not.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { directory_is } from '../directory/is.mjs';
export async function file_is(file_path) {
    arguments_assert(arguments, [path_is]);
    let v_2 = await directory_is(file_path);
    let v = not(v_2);
    return v;
    metadata([]);
}