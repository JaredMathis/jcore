import { task_map } from './map.mjs';
import { task_id_set_hash } from './id/set/hash.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { object_property_data } from '../object/property/data.mjs';
import { git_hub_repository_issues_post } from '../git/hub/repository/issues/post.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_add } from '../list/add.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_number } from './property/number.mjs';
export async function task_add(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let response = await git_hub_repository_issues_post(title);
    let data = object_property_data(response);
    let task = task_from_git_hub_issue(data);
    await task_map(map);
    let task_number = object_property_get(task, task_property_number());
    await task_id_set_hash(task_number);
    function map(tasks_all) {
        list_add(tasks_all, task);
    }
}