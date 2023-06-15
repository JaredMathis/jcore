import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
export function git_hub_issues_pull() {
    arguments_assert(arguments, []);
    let issues = git_hub_repository_issues_all()
    assert(list_length(issues) <= 100);
}