import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { file_json_read } from '../../../../file/json/read.mjs';
import { git_hub_repository_issues_open } from './open.mjs';
import { git_hub_cached } from '../../cached.mjs';
import { Octokit } from 'octokit';
export async function git_hub_repository_issues_generic(api_args_to_merge, verb) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return await git_hub_cached(git_hub_repository_issues_open, arguments, async function lambda() {
        let p = await file_json_read('../private.json');
        let token = object_property_get(p, 'git_hub_api_token');
        const octokit = new Octokit({ auth: token });
        let owner = 'JaredMathis';
        let repository = 'jcore';
        const api_args = {
            owner: owner,
            repo: repository
        };
        object_merge(api_args_to_merge, api_args);
        let issues = await octokit.request(`${ verb } /repos/{owner}/{repo}/issues`, api_args);
        return issues;
    });
}