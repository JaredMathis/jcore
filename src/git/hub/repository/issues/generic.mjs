import { git_hub_page_size } from '../../page/size.mjs';
import { json_to_minimized } from '../../../../json/to/minimized.mjs';
import { file_json_write } from '../../../../file/json/write.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { file_json_read } from '../../../../file/json/read.mjs';
import { file_exists } from '../../../../file/exists.mjs';
import { file_extension_json } from '../../../../file/extension/json.mjs';
import { string_add } from '../../../../string/add.mjs';
import { path_join } from '../../../../path/join.mjs';
import { string_base64_to } from '../../../../string/base64/to.mjs';
import { git_hub_repository_issues_open } from './open.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { git_ignore_cache } from '../../../ignore/cache.mjs';
import { git_ignore_add_if_not_exists } from '../../../ignore/add/if/not/exists.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { Octokit } from 'octokit';
import { defined_is } from '../../../../defined/is.mjs';
export async function git_hub_repository_issues_generic(api_args_to_merge) {
    arguments_assert(arguments, [defined_is]);
    await git_ignore_add_if_not_exists(git_ignore_cache());
    let file_path = git_hub_cache_file_path(git_hub_repository_issues_open);
    if (await file_exists(file_path)) {
        let result = await file_json_read(file_path);
        return result;
    }
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
    await file_json_write(file_path, issues);
    return issues;
}

function git_hub_cache_file_path(fn) {
    let function_name = function_name_get(fn);
    let args = arguments;
    let key = [
        function_name,
        args
    ];
    let key_json = json_to_minimized(key);
    let file_name = string_base64_to(key_json);
    let file_path = path_join([
        git_ignore_cache(),
        string_add(file_name, file_extension_json())
    ]);
    return file_path;
}
