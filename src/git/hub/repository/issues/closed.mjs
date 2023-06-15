import { git_hub_repository_issues_generic } from './generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_closed() {
    arguments_assert(arguments, []);
    return await git_hub_repository_issues_generic({ state: 'closed' });
}