import { git_hub_repository_issues_patch } from './patch.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { task_property_title } from '../../../../task/property/title.mjs';
export async function git_hub_repository_issues_title(issue_number, title) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let api_args_to_merges = { [task_property_title()]: title };
    return git_hub_repository_issues_patch(issue_number, api_args_to_merge);
}