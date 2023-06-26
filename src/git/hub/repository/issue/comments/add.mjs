import { git_hub_repository_issues_generic } from '../../issues/generic.mjs';
import { object_merge } from '../../../../../object/merge.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function git_hub_repository_issue_comments_add(body) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let api_args_to_merge = {};
    let verb = 'POST';
    let no_cache = true;
    let v_2 = { body };
    object_merge(v_2, api_args_to_merge);
    let v = await git_hub_repository_issues_generic(git_hub_repository_issue_comments_add, arguments, api_args_to_merge, verb, no_cache);
    return v;
}