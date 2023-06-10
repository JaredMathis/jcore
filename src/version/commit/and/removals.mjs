import { log } from '../../../log.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { version_write_all } from '../../write/all.mjs';
import { list_multiple_combine } from '../../../list/multiple/combine.mjs';
import { file_json_overwrite } from '../../../file/json/overwrite.mjs';
import { version_commit_files_all_removals_generic } from '../files/all/removals/generic.mjs';
import { version_commit_files_difference } from '../files/difference.mjs';
import { directory_read_current } from '../../../directory/read/current.mjs';
import { version_commit_data } from '../data.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function version_commit_and_removals(repository_name) {
    arguments_assert(arguments, [string_identifier_is]);
    const commit_data = version_commit_data(version_commit_and_removals, arguments);
    let file_paths = await directory_read_current();
    let differences = await version_commit_files_difference(repository_name, file_paths, commit_data);
    let removals = await version_commit_files_all_removals_generic(repository_name, file_paths, commit_data);
    let writes = list_multiple_combine([
        differences,
        removals
    ]);
    await version_write_all(writes);
}
