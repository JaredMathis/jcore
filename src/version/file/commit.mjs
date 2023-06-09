import { object_is } from '../../object/is.mjs';
import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function version_file_commit(repository_name, file_path, data) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is,
        object_is
    ]);
    error('todo: version_file_commit');
}