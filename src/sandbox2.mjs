import { version_commit_files_all_removals } from './version/commit/files/all/removals.mjs';
import { version_commit_files_all } from './version/commit/files/all.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_files_all(repository_name);
    let removals = await version_commit_files_all_removals(repository_name);
}