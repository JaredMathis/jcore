import { version_write_all } from './version/write/all.mjs';
import { directory_read_current } from './directory/read/current.mjs';
import { version_commit_files_all_removals_generic } from './version/commit/files/all/removals/generic.mjs';
import { version_commit_files_difference } from './version/commit/files/difference.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { list_multiple_combine } from './list/multiple/combine.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    let file_paths = await directory_read_current();
    let differences = await version_commit_files_difference(repository_name, file_paths, data);
    let removals = await version_commit_files_all_removals_generic(repository_name, file_paths);
    let writes = list_multiple_combine([
        differences,
        removals
    ]);
    await version_write_all(writes);
}