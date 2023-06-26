import { metadata } from '../../../../metadata.mjs';
import { task_property_closed } from '../../../../task/property/closed.mjs';
import { git_hub_repository_issues_get } from './get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_closed() {
    arguments_assert(arguments, []);
    let v_2 = { state: task_property_closed() };
    let v = await git_hub_repository_issues_get(v_2, no_cache, page);
    return v;
    metadata([]);
}