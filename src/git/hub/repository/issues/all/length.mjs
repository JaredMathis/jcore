import { object_property_data_list_length } from '../../../../../object/property/data/list/length.mjs';
import { git_hub_repository_issues_open } from '../open.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function git_hub_repository_issues_all_length() {
    arguments_assert(arguments, []);
    let issues = await git_hub_repository_issues_open();
    return object_property_data_list_length(issues);
}