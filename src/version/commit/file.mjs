import { list_single_item } from '../../list/single/item.mjs';
import { version_commit_data } from './data.mjs';
import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_commit_files } from './files.mjs';
export function version_commit_file(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    version_commit_files(repository_name, list_single_item(file_path), version_commit_data(version_commit_file, arguments));
}