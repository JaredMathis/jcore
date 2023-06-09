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
import { object_property_get } from '../object/property/get.mjs';
import { list_add } from '../list/add.mjs';
import { string_difference_apply } from '../string/difference/apply.mjs';
import { string_difference_get } from '../string/difference/get.mjs';
export async function file_difference(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    let gitignore_file_path = '.gitignore';
    if (!await file_exists(gitignore_file_path)) {
        await file_write(gitignore_file_path, string_empty());
    }
    let gitignore_contents = await file_read(gitignore_file_path);
    let gitignore_lines = string_split(gitignore_contents, string_new_line());
    let mapped = list_map(gitignore_lines, string_trim);
    list_add_if_not_exists(mapped, version_directory_root());
    let gitignore_contents_new = list_join(mapped, string_new_line());
    await file_overwrite(gitignore_file_path, gitignore_contents_new);
    let part_id = guid_generate();
    let list_hunks = [];
    let property_hunks = 'hunks';
    let version = 1;
    let version_path_value;
    while (true) {
        version_path_value = version_path(repository_name, file_path, version);
        if (!await file_exists(version_path_value)) {
            break;
        }
        let before_object = file_json_read(version_path_value);
        let hunks = object_property_get(before_object, property_hunks);
        list_add(list_hunks, hunks);
        version++;
    }

    let contents_old = string_empty();
    for (let hunks of list_hunks) {
        contents_old = string_difference_apply(contents_old, hunks)
    }

    let contents_new = await file_read(file_path);
    let hunks_new = string_difference_get(contents_old, contents_new)

    await file_json_overwrite(version_path_value, {
        [property_hunks]: hunks_new,
        part_id
    });
    return part_id;
}

function version_path(repository_name, file_path, version) {
    let repository_container_folder_name = version_directory_root();
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
    let initial_file_name = `${version}${file_extension_json()}`;
    let repository_file_path_initial = path_join([
        repository_file_path,
        initial_file_name
    ]);
    return repository_file_path_initial;
}
function version_directory_root() {
    return 'tc';
}

