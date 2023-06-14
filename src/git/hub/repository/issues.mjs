import { git_ignore_cache } from '../../ignore/cache.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { file_json_read } from '../../../file/json/read.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { git_ignore_add_if_not_exists } from '../../ignore/add/if/not/exists.mjs';
export async function git_hub_repository_issues() {
    arguments_assert(arguments, []);
    await git_ignore_add_if_not_exists(git_ignore_cache);
    let p = await file_json_read('../private.json');
    let token = object_property_get(p, 'git_hub_api_token');
    const octokit = new Octokit({ auth: token });
    let owner = 'JaredMathis';
    let repository = 'jcore';
    let issues = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: owner,
        repo: repository
    });
    return issues;
}