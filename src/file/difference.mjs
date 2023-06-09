import { list_add_if_not_exists } from '../list/add/if/not/exists.mjs';
import { string_trim } from '../string/trim.mjs';
import { list_map } from '../list/map.mjs';
import { string_new_line } from '../string/new/line.mjs';
import { file_read } from './read.mjs';
import { string_empty } from '../string/empty.mjs';
import { file_write } from './write.mjs';
import { file_exists } from './exists.mjs';
import { directory_exists_ensure } from '../directory/exists/ensure.mjs';
import { path_is } from '../path/is.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_split } from '../string/split.mjs';
export async function file_difference(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    let repository_container_folder_name = 'tc';
    await directory_exists_ensure(repository_container_folder_name);
    let gitignore_file_path = '.gitignore';
    if (!await file_exists(gitignore_file_path)) {
        await file_write(gitignore_file_path, string_empty());
    }
    let gitignore_contents = await file_read(gitignore_file_path);
    file_map;
    let gitignore_lines = string_split(gitignore_contents, string_new_line());
    let mapped = list_map(gitignore_lines, string_trim);
    list_add_if_not_exists(mapped, repository_container_folder_name);
    return mapped;
}