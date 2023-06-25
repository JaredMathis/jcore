import { not } from '../../not.mjs';
import { boolean_is } from '../../boolean/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { external_octokit_property_data } from '../../external/octokit/property/data.mjs';
import { object_merge } from '../../object/merge.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { file_json_read } from '../../file/json/read.mjs';
import { git_hub_cached } from './cached.mjs';
import { Octokit } from 'octokit';
import { list_contains } from '../../list/contains.mjs';
export async function git_hub_api(fn, args, verb, api_path, api_args_to_merge, no_cache) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        boolean_is
    ]);
    let verbs_cache = ['GET'];
    let v_3 = not(list_contains(verbs_cache, verb));
    if (v_3) {
        let v = await lambda();
        return v;
    }
    let v_2 = await git_hub_cached(fn, args, lambda);
    return v_2;
    async function lambda() {
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
        let issues = await octokit.request(`${ verb } ${ api_path }`, api_args);
        let data = external_octokit_property_data(issues);
        return data;
    }
}