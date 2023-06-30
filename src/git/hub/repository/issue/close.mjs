import { git_hub_repository_issue_state_generic } from './state/generic.mjs';
import { metadata } from '../../../../metadata.mjs';
import { task_property_closed } from '../../../../task/property/closed.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issue_close(issue_number) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = task_property_closed();
    return git_hub_repository_issue_state_generic(v_2, issue_number);
    metadata([]);
}