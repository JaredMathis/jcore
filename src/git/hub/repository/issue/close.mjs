import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { metadata } from '../../../../metadata.mjs';
import { git_hub_repository_issue_patch } from './patch.mjs';
import { task_property_closed } from '../../../../task/property/closed.mjs';
import { task_property_state } from '../../../../task/property/state.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issue_close(issue_number) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = task_property_closed();
    let api_args_to_merge = { [task_property_state()]: v_2 };
    let no_cache = boolean_value_true();
    let v = git_hub_repository_issue_patch(git_hub_repository_issue_close, arguments, issue_number, api_args_to_merge, no_cache);
    return v;
    metadata([]);
}