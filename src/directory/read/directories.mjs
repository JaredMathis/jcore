import { metadata } from '../../metadata.mjs';
import { directory_read_recursive } from './recursive.mjs';
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function directory_read_directories(dir) {
    arguments_assert(arguments, [path_is]);
    return await directory_read_recursive(dir, []);
    metadata([]);
}