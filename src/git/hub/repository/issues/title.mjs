import { git_hub_repository_issues_patch } from './patch.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { task_property_title } from '../../../../task/property/title.mjs';
export async function git_hub_repository_issues_title(api_args_to_merge, issue_number, title) {
    arguments_assert(arguments, [
        defined_is,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    object_merge({ [task_property_title()]: title }, api_args_to_merge);
    return git_hub_repository_issues_patch(issue_number, api_args_to_merge);
}