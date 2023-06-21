import { directory_read_current } from '../../../directory/read/current.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { version_commit_data } from '../data.mjs';
import { version_commit_files } from '../files.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
export async function version_commit_files_all(repository_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let file_paths = await directory_read_current();
    let v = version_commit_data(version_commit_files_all, arguments);
    await version_commit_files(repository_name, file_paths, v);
}