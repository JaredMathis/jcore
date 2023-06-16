import { git_hub_repository_issues_patch } from './patch.mjs';
import { task_property_closed } from '../../../../task/property/closed.mjs';
import { task_property_state } from '../../../../task/property/state.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_close(issue_number) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let api_args_to_merge = { [task_property_state()]: task_property_closed() };
    let no_cache = true;
    return git_hub_repository_issues_patch(git_hub_repository_issues_close, arguments, issue_number, api_args_to_merge, no_cache);
}