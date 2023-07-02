import { version_path_tasks_all_2_get } from '../../../../../version/path/tasks/all/2/get.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { version_repository_default } from '../../../../../version/repository/default.mjs';
import { task_git_hub_issues_pull_generic } from './generic.mjs';
import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function task_git_hub_issues_pull_2() {
    arguments_assert(arguments, []);
    const no_cache = boolean_value_true();
    let v = await task_git_hub_issues_pull_generic(no_cache, version_path_tasks_all_2_get(version_repository_default()));
    return v;
    metadata([]);
}