import { git_hub_cached } from '../../cached.mjs';
import { git_hub_page_size } from '../../page/size.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { file_json_read } from '../../../../file/json/read.mjs';
import { git_hub_repository_issues_open } from './open.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { defined_is } from '../../../../defined/is.mjs';
export async function git_hub_repository_issues_generic(api_args_to_merge) {
    arguments_assert(arguments, [defined_is]);
    let verb = 'GET';
    return await git_hub_cached(git_hub_repository_issues_open, arguments, async function lambda() {
        let p = await file_json_read('../private.json');
        let token = object_property_get(p, 'git_hub_api_token');
        const octokit = new Octokit({ auth: token });
        let owner = 'JaredMathis';
        let repository = 'jcore';
        const api_args = {
            owner: owner,
            repo: repository,
            per_page: git_hub_page_size()
        };
        object_merge(api_args_to_merge, api_args);
        let issues = await octokit.request(`${ verb } /repos/{owner}/{repo}/issues`, api_args);
        return issues;
    });
}