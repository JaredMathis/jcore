import { git_hub_repository_issues_get } from './get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_open() {
    arguments_assert(arguments, []);
    let v = await git_hub_repository_issues_get({}, no_cache, page);
    return v;
}