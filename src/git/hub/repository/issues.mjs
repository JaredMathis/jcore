import { function_name_get } from '../../../function/name/get.mjs';
import { git_ignore_cache } from '../../ignore/cache.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { file_json_read } from '../../../file/json/read.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { git_ignore_add_if_not_exists } from '../../ignore/add/if/not/exists.mjs';
import { error } from '../../../error.mjs';
import { file_exists } from '../../../file/exists.mjs';
import { path_join } from '../../../path/join.mjs';
import { file_extension_json } from '../../../file/extension/json.mjs';
export async function git_hub_repository_issues() {
    arguments_assert(arguments, []);
    await git_ignore_add_if_not_exists(git_ignore_cache());
    let key = function_name_get(git_hub_repository_issues);
    let file_name = string_base64_to(key);
    let file_path = path_join([git_ignore_cache(), string_add(file_name, file_extension_json())]);
    if (await file_exists(file_path)) {

    }
    let cache = await file_json_read(error());
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