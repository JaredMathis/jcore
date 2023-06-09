import { file_json_overwrite } from './json/overwrite.mjs';
import { file_extension_json } from './extension/json.mjs';
import { list_join } from '../list/join.mjs';
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
import { file_overwrite } from './overwrite.mjs';
import { path_join } from '../path/join.mjs';
import { guid_generate } from '../guid/generate.mjs';
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
    let gitignore_lines = string_split(gitignore_contents, string_new_line());
    let mapped = list_map(gitignore_lines, string_trim);
    list_add_if_not_exists(mapped, repository_container_folder_name);
    let gitignore_contents_new = list_join(mapped, string_new_line());
    await file_overwrite(gitignore_file_path, gitignore_contents_new);
    let repository_directory = path_join([
        repository_container_folder_name,
        repository_name
    ]);
    let repository_files_directory_name = 'files';
    let repository_file_path = path_join([
        repository_directory,
        repository_files_directory_name,
        file_path
    ]);
    let initial_file_name = `1${ file_extension_json() }`;
    let repository_file_path_initial = path_join([
        repository_file_path,
        initial_file_name
    ]);
    let part_id = guid_generate();
    let file_path_contents = await file_read(file_path);
    let before;
    if (await file_exists(repository_file_path_initial)) {
        let before_object = file_json_read(repository_file_path_initial);
    }
    await file_json_overwrite(repository_file_path_initial, {
        contents: file_path_contents,
        part_id
    });
    return part_id;
}