import { file_exists } from './exists.mjs';
import { directory_exists_ensure } from '../directory/exists/ensure.mjs';
import { path_is } from '../path/is.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function file_difference(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    let repository_container_folder_name = 'tc';
    await directory_exists_ensure(repository_container_folder_name);
    let gitignore_file_path = '.gitignore';
    if (!await file_exists(gitignore_file_path)) {
    }
}