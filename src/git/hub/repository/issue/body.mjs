import { task_property_body } from '../../../../task/property/body.mjs';
import { git_hub_repository_issues_patch } from '../issues/patch.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issue_body(issue_number, body) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let api_args_to_merge = { [task_property_body()]: body };
    let no_cache = true;
    return git_hub_repository_issues_patch(git_hub_repository_issue_body, arguments, issue_number, api_args_to_merge, no_cache);
}