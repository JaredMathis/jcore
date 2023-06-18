import { integer_is } from '../../../../integer/is.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { git_hub_repository_issues_get } from './get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_all(no_cache, page) {
    arguments_assert(arguments, [
        boolean_is,
        integer_is
    ]);
    let v = await git_hub_repository_issues_get({ state: 'all' }, no_cache, page);
    return v;
}