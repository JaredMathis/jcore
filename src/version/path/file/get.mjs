import { version_path_file_directory } from './directory.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { file_name_json } from '../../../file/name/json.mjs';
export function version_path_file_get(repository_name, file_path, version) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is,
        integer_is
    ]);
    let repository_file_path = version_path_file_directory(repository_name, file_path);
    let file_name = file_name_json(version);
    let repository_file_path_initial = path_join([
        repository_file_path,
        file_name
    ]);
    return repository_file_path_initial;
}