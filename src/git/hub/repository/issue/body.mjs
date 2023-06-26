import { metadata } from '../../../../metadata.mjs';
import { task_property_body } from '../../../../task/property/body.mjs';
import { git_hub_repository_issue_patch } from './patch.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issue_body(issue_number, body) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let api_args_to_merge = { [task_property_body()]: body };
    let no_cache = true;
    let v = git_hub_repository_issue_patch(git_hub_repository_issue_body, arguments, issue_number, api_args_to_merge, no_cache);
    return v;
    metadata([]);
}