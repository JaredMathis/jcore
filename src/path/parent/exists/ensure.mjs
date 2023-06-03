import { path_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
import { path_parent } from '../../parent.mjs';
export async function path_parent_exists_ensure(file_path) {
    arguments_assert(arguments, [path_is]);
    let directory_path = path_parent(file_path);
    await directory_exists_ensure(directory_path);
    metadata([]);
}