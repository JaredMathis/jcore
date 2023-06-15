import { git_hub_repository_issues_patch } from './patch.mjs';
import { task_property_closed } from '../../../../task/property/closed.mjs';
import { task_property_state } from '../../../../task/property/state.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_title(api_args_to_merge, issue_number) {
    arguments_assert(arguments, [
        defined_is,
        arguments_assert_todo
    ]);
    object_merge({ [task_property_state()]: task_property_closed() }, api_args_to_merge);
    return git_hub_repository_issues_patch(issue_number, api_args_to_merge);
}