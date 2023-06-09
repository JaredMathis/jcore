import { version_commit_files_all_removals_generic } from './version/commit/files/all/removals/generic.mjs';
import { version_commit_files_difference } from './version/commit/files/difference.mjs';
import { version_commit_files_all } from './version/commit/files/all.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_files_all(repository_name);
    let differences = await version_commit_files_difference(repository_name, file_paths, data);
    let removals = await version_commit_files_all_removals_generic(file_paths, repository_name);
}