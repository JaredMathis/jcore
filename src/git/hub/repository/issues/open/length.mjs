import { object_property_get } from '../../../../../object/property/get.mjs';
import { git_hub_repository_issues_open } from '../open.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_length } from '../../../../../list/length.mjs';
export async function git_hub_repository_issues_open_length() {
    arguments_assert(arguments, []);
    let issues = await git_hub_repository_issues_open();
    let v = issues;
    let data = object_property_get(v, 'data');
    return list_length(data);
}