import { integer_is } from '../../../../integer/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { git_hub_repository_issues_generic } from './generic.mjs';
import { git_hub_page_size } from '../../page/size.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { defined_is } from '../../../../defined/is.mjs';
export async function git_hub_repository_issues_get(api_args_to_merge, no_cache, page) {
    arguments_assert(arguments, [
        defined_is,
        boolean_is,
        integer_is
    ]);
    let verb = 'GET';
    let v_2 = {
        per_page: git_hub_page_size(),
        page
    };
    object_merge(v_2, api_args_to_merge);
    let v = await git_hub_repository_issues_generic(git_hub_repository_issues_get, arguments, api_args_to_merge, verb, no_cache);
    return v;
}