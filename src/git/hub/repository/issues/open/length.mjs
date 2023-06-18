import { list_length } from '../../../../../list/length.mjs';
import { git_hub_repository_issues_open } from '../open.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_open_length() {
    arguments_assert(arguments, []);
    let issues = await git_hub_repository_issues_open();
    let v = list_length(issues);
    return v;
}