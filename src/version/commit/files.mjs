import { version_write_all } from '../write/all.mjs';
import { version_commit_files_generic } from './files/generic.mjs';
import { object_is } from '../../object/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_difference } from '../file/difference.mjs';
import { list_is } from '../../list/is.mjs';
export async function version_commit_files(repository_name, file_paths, data) {
    arguments_assert(arguments, [
        string_identifier_is,
        list_is,
        object_is
    ]);
    let lambda = version_file_difference;
    let writes = await version_commit_files_generic(repository_name, file_paths, data, lambda);
    await version_write_all(writes);
}