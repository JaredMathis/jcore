import { path_is } from '../../path/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_difference } from '../difference.mjs';
export async function file_difference_commit(repository_name, file_path) {
    arguments_assert(arguments, [
        string_identifier_is,
        path_is
    ]);
    let commit_id = guid_generate()
    let commit = {commit_id};
    await file_difference(repository_name, commit_id, file_path);
}