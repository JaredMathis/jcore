import { metadata } from '../../../../../metadata.mjs';
import { list_length } from '../../../../../list/length.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { git_hub_repository_issues_all } from '../all.mjs';
export async function git_hub_repository_issues_all_length() {
    arguments_assert(arguments, []);
    let issues = await git_hub_repository_issues_all(no_cache, page);
    let v = list_length(issues);
    return v;
    metadata([]);
}