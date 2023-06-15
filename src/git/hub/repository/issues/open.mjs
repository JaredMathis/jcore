import { file_json_write } from '../../../../file/json/write.mjs';
import { string_add } from '../../../../string/add.mjs';
import { string_base64_to } from '../../../../string/base64/to.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { git_ignore_cache } from '../../../ignore/cache.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { file_json_read } from '../../../../file/json/read.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { git_ignore_add_if_not_exists } from '../../../ignore/add/if/not/exists.mjs';
import { file_exists } from '../../../../file/exists.mjs';
import { path_join } from '../../../../path/join.mjs';
import { file_extension_json } from '../../../../file/extension/json.mjs';
export async function git_hub_repository_issues_open() {
    arguments_assert(arguments, []);
    await git_ignore_add_if_not_exists(git_ignore_cache());
    let key = function_name_get(git_hub_repository_issues_open);
    let file_name = string_base64_to(key);
    let file_path = path_join([
        git_ignore_cache(),
        string_add(file_name, file_extension_json())
    ]);
    if (await file_exists(file_path)) {
        let result = await file_json_read(file_path);
        return result;
    }
    let p = await file_json_read('../private.json');
    let token = object_property_get(p, 'git_hub_api_token');
    const octokit = new Octokit({ auth: token });
    let owner = 'JaredMathis';
    let repository = 'jcore';
    const args = {
        owner: owner,
        repo: repository
    };
    let issues = await octokit.request('GET /repos/{owner}/{repo}/issues', args);
    await file_json_write(file_path, issues);
    return issues;
}

async function git_hub_repository_issues_generic() {
    arguments_assert(arguments, []);
    await git_ignore_add_if_not_exists(git_ignore_cache());
    let key = function_name_get(git_hub_repository_issues_open);
    let file_name = string_base64_to(key);
    let file_path = path_join([
        git_ignore_cache(),
        string_add(file_name, file_extension_json())
    ]);
    if (await file_exists(file_path)) {
        let result = await file_json_read(file_path);
        return result;
    }
    let p = await file_json_read('../private.json');
    let token = object_property_get(p, 'git_hub_api_token');
    const octokit = new Octokit({ auth: token });
    let owner = 'JaredMathis';
    let repository = 'jcore';
    const args = {
        owner: owner,
        repo: repository
    };
    let issues = await octokit.request('GET /repos/{owner}/{repo}/issues', args);
    await file_json_write(file_path, issues);
    return issues;
}