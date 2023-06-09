import { version_commit_data } from './data.mjs';
import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_commit_files_with_data } from './files/with/data.mjs';
export function version_commit_file(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    version_commit_files_with_data(repository_name, file_path, version_commit_data(version_commit_file, arguments));
}