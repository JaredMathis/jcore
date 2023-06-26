import { metadata } from '../../../../metadata.mjs';
import { task_git_hub_issues_pull_generic } from './pull/generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function task_git_hub_issues_pull() {
    arguments_assert(arguments, []);
    const no_cache = true;
    let v = await task_git_hub_issues_pull_generic(no_cache);
    return v;
    metadata([]);
}