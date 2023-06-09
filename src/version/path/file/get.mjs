import { version_path_sub_get } from '../sub/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { file_extension_json } from '../../../file/extension/json.mjs';
import { path_join } from '../../../path/join.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { integer_is } from '../../../integer/is.mjs';
export function version_path_file_get(repository_name, file_path, version) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is,
        integer_is
    ]);
    let repository_files_directory_name = 'files';
    let repository_sub_path = version_path_sub_get(repository_name, repository_files_directory_name);
    let repository_file_path = path_join([
        repository_sub_path,
        file_path
    ]);
    let initial_file_name = `${ version }${ file_extension_json() }`;
    let repository_file_path_initial = path_join([
        repository_file_path,
        initial_file_name
    ]);
    return repository_file_path_initial;
}