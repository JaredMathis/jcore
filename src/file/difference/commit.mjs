import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function file_difference_commit(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    error('todo: file_difference_commit');
}