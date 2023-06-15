import { git_hub_repository_issues } from '../issues.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_length } from '../../../../list/length.mjs';
export async function git_hub_repository_issues_length() {
    arguments_assert(arguments, []);
    let issues = await git_hub_repository_issues();
    return list_length(issues);
}