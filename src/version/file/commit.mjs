import { version_commit_data } from '../commit/data.mjs';
import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_commit_with_data } from './commit/with/data.mjs';
export function version_file_commit(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    version_file_commit_with_data(repository_name, file_path, version_commit_data(version_file_commit, arguments));
}