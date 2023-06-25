import { path_is } from '../../path/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { path_exists } from '../../path/exists.mjs';
import { directory_add } from '../add.mjs';
export async function directory_exists_ensure(directory_path) {
    arguments_assert(arguments, [path_is]);
    let v = await path_exists(directory_path);
    if (v) {
        return;
    }
    await directory_add(directory_path);
    metadata([]);
}