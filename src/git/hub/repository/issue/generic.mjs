import { error } from '../../../../error.mjs';
import { git_hub_api } from '../../api.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issue_generic(fn, args, api_args_to_merge, verb) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let api_path = `/repos/{owner}/{repo}/issues/{issue_number}`;
    return await git_hub_api(fn, args, verb, api_path, api_args_to_merge, error());
}