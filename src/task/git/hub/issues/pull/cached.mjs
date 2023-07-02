import { version_repository_default } from '../../../../../version/repository/default.mjs';
import { version_path_tasks_all_get } from '../../../../../version/path/tasks/all/get.mjs';
import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { task_git_hub_issues_pull_generic } from './generic.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function task_git_hub_issues_pull_cached() {
    arguments_assert(arguments, []);
    let lambda = version_path_tasks_all_get;
    const no_cache = boolean_value_false();
    let v = await task_git_hub_issues_pull_generic(no_cache, lambda(version_repository_default()));
    return v;
    metadata([]);
}