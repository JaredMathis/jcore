import { task_git_hub_issues_pull_cached } from '../cached.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function task_git_hub_issues_pull_cached_length() {
    arguments_assert(arguments, []);
    let result = await task_git_hub_issues_pull_cached();
    return result;
}