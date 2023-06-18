import { boolean_is } from '../../../../boolean/is.mjs';
import { git_hub_api } from '../../api.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_generic(fn, args, api_args_to_merge, verb, no_cache) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        boolean_is
    ]);
    let api_path = `/repos/{owner}/{repo}/issues`;
    let v = await git_hub_api(fn, args, verb, api_path, api_args_to_merge, no_cache);
    return v;
}