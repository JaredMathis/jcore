import { git_hub_repository_issue_generic } from '../issue/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_merge } from '../../../../object/merge.mjs';
export async function git_hub_repository_issues_patch(fn, args, issue_number, api_args_to_merge) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    object_merge({ issue_number }, api_args_to_merge);
    let verb = 'PATCH';
    return await git_hub_repository_issue_generic(fn, args, api_args_to_merge, verb, no_cache);
}