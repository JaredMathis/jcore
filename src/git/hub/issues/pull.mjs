import { object_map } from '../../../object/map.mjs';
import { object_property_data } from '../../../object/property/data.mjs';
import { git_hub_page_size } from '../page/size.mjs';
import { list_length } from '../../../list/length.mjs';
import { git_hub_repository_issues_all } from '../repository/issues/all.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { list_map } from '../../../list/map.mjs';
export async function git_hub_issues_pull() {
    arguments_assert(arguments, []);
    let issues_response = await git_hub_repository_issues_all();
    let issues = object_property_data(issues_response);
    comment(`If there's more than 1 page of issues code needs adjusting`);
    assert(list_length(issues) <= git_hub_page_size());
    let mapped = list_map(issues, issue => object_map(issue, [
        'number',
        'title'
    ]));
    
}