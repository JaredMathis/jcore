import { metadata } from '../../../metadata.mjs';
import { list_add } from '../../../list/add.mjs';
import { noop } from '../../../noop.mjs';
import { directory_read_recursive_generic } from '../recursive/generic.mjs';
import { list_is } from '../../../list/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function directory_read_directories_recursive(dir, path_list) {
    arguments_assert(arguments, [
        path_is,
        list_is
    ]);
    let v = await directory_read_recursive_generic(dir, path_list, on_directory, noop);
    return v;
    async function on_directory(path_list, file_path) {
        list_add(path_list, file_path);
    }
    metadata([]);
}