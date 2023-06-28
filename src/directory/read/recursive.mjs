import { metadata } from '../../metadata.mjs';
import { directory_read_recursive_generic } from './recursive/generic.mjs';
import { list_add } from '../../list/add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { path_is } from '../../path/is.mjs';
import { list_is } from '../../list/is.mjs';
import { noop } from '../../noop.mjs';
export async function directory_read_recursive(dir, path_list) {
    arguments_assert(arguments, [
        path_is,
        list_is
    ]);
    let v = await directory_read_recursive_generic(dir, path_list, noop, on_file, true);
    return v;
    async function on_file(path_list, file_path) {
        list_add(path_list, file_path);
    }
    metadata([]);
}