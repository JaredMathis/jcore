import { boolean_is } from '../../../../boolean/is.mjs';
import { git_hub_repository_issue_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_merge } from '../../../../object/merge.mjs';
export async function git_hub_repository_issue_patch(fn, args, issue_number, api_args_to_merge, no_cache) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        boolean_is
    ]);
    object_merge({ issue_number }, api_args_to_merge);
    let verb = 'PATCH';
    return await git_hub_repository_issue_generic(fn, args, api_args_to_merge, verb, no_cache);
}