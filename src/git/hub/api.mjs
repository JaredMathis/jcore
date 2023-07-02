import { cached_generic } from '../../cached/generic.mjs';
import { private_get } from '../../private/get.mjs';
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { boolean_is } from '../../boolean/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { external_octokit_property_data } from '../../external/octokit/property/data.mjs';
import { object_merge } from '../../object/merge.mjs';
import { Octokit } from 'octokit';
import { list_contains } from '../../list/contains.mjs';
import { log } from '../../log.mjs';
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
    let v_4 = list_contains(verbs_cache, verb);
    let v_3 = not(v_4);
    if (v_3) {
        let v = await lambda();
        return v;
    }
    let v_2 = await cached_generic(fn, args, lambda, no_cache);
    return v_2;
    async function lambda() {
        let v_6 = 'git_hub_api_token';
        let token = await private_get(v_6);
        const octokit = new Octokit({ auth: token });
        let owner = 'JaredMathis';
        let repository = 'jcore';
        const api_args = {
            owner: owner,
            repo: repository
        };
        object_merge(api_args_to_merge, api_args);
        log({ api_args });
        let v_7 = `${ verb } ${ api_path }`;
        let issues = await octokit.request(v_7, api_args);
        let data = external_octokit_property_data(issues);
        return data;
    }
    metadata([]);
}