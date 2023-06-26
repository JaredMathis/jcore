import { directory_read_directories_recursive } from './directories/recursive.mjs';
import { metadata } from '../../metadata.mjs';
import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function directory_read_directories(dir) {
    arguments_assert(arguments, [path_is]);
    let v_2 = [];
    let v = await directory_read_directories_recursive(dir, v_2);
    return v;
    metadata([]);
}