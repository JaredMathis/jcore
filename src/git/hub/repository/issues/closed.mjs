import { task_property_closed } from '../../../../task/property/closed.mjs';
import { git_hub_repository_issues_get } from './get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_closed() {
    arguments_assert(arguments, []);
    return await git_hub_repository_issues_get({ state: task_property_closed() }, no_cache);
}