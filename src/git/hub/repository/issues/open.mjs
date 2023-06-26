import { metadata } from '../../../../metadata.mjs';
import { git_hub_repository_issues_get } from './get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_open() {
    arguments_assert(arguments, []);
    let v_2 = {};
    let v = await git_hub_repository_issues_get(v_2, no_cache, page);
    return v;
    metadata([]);
}