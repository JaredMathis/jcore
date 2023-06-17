import { path_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { path_exists } from '../exists.mjs';
export async function path_exists_not(file_path) {
    arguments_assert(arguments, [path_is]);
    return await not(await path_exists(file_path));
    metadata([]);
}