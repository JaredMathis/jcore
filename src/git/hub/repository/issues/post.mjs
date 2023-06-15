import { git_hub_repository_issues_generic } from './generic.mjs';
import { git_hub_page_size } from '../../page/size.mjs';
import { object_merge } from '../../../../object/merge.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_post(api_args_to_merge) {
    arguments_assert(arguments, [defined_is]);
    let verb = 'GET';
    object_merge({ per_page: git_hub_page_size() }, api_args_to_merge);
    return await git_hub_repository_issues_generic(api_args_to_merge, verb);
}