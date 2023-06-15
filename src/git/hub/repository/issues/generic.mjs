import { git_hub_cache_file_path } from '../../cache/file/path.mjs';
import { git_hub_page_size } from '../../page/size.mjs';
import { file_json_write } from '../../../../file/json/write.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { file_json_read } from '../../../../file/json/read.mjs';
import { file_exists } from '../../../../file/exists.mjs';
import { git_hub_repository_issues_open } from './open.mjs';
import { git_ignore_cache } from '../../../ignore/cache.mjs';
import { git_ignore_add_if_not_exists } from '../../../ignore/add/if/not/exists.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { defined_is } from '../../../../defined/is.mjs';
export async function git_hub_repository_issues_generic(api_args_to_merge) {
    arguments_assert(arguments, [defined_is]);
    return await git_hub_cached(git_hub_repository_issues_open, arguments, async function lambda(api_args_to_merge) {
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
        let issues = await octokit.request('GET /repos/{owner}/{repo}/issues', api_args);
        return issues;
    });
}