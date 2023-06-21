import { version_commit_files_difference } from './files/difference.mjs';
import { version_write_all } from '../write/all.mjs';
import { object_is } from '../../object/is.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_is } from '../../list/is.mjs';
export async function version_commit_files(repository_name, file_paths, data) {
    arguments_assert(arguments, [
        js_identifier_is,
        list_is,
        object_is
    ]);
    let writes = await version_commit_files_difference(repository_name, file_paths, data);
    await version_write_all(writes);
}