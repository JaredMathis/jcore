import { git_hub_repository_issues_generic } from './generic.mjs';
import { object_merge } from '../../../../object/merge.mjs';
export async function git_hub_repository_issues_patch(issue_number, api_args_to_merge) {
    object_merge({ issue_number }, api_args_to_merge);
    let verb = 'PATCH';
    return await git_hub_repository_issues_generic(api_args_to_merge, verb);
}