import { list_first } from '../../../list/first.mjs';
import { git_hub_page_size } from '../page/size.mjs';
import { list_length } from '../../../list/length.mjs';
import { git_hub_repository_issues_all } from '../repository/issues/all.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
export function git_hub_issues_pull() {
    arguments_assert(arguments, []);
    let issues = git_hub_repository_issues_all();
    comment(`If there's more than 1 page of issues code needs adjusting`);
    assert(list_length(issues) <= git_hub_page_size());
    let issue_first = list_first(issues);
    return issue_first;
}