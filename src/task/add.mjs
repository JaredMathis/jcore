import { task_id_set_hash } from './id/set/hash.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { object_property_data } from '../object/property/data.mjs';
import { git_hub_repository_issues_post } from '../git/hub/repository/issues/post.mjs';
import { version_path_tasks_all_get } from '../version/path/tasks/all/get.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_json_read } from '../file/json/read.mjs';
import { file_json_overwrite } from '../file/json/overwrite.mjs';
import { file_exists } from '../file/exists.mjs';
import { list_add } from '../list/add.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_number } from './property/number.mjs';
export async function task_add(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let response = await git_hub_repository_issues_post(title);
    let data = object_property_data(response);
    let task = task_from_git_hub_issue(data);
    let tasks_all_path = version_path_tasks_all_get(repository_name);
    if (!await file_exists(tasks_all_path)) {
        const initial_value = [];
        await file_json_overwrite(tasks_all_path, initial_value);
    }
    let tasks_all = await file_json_read(tasks_all_path);
    map(tasks_all);
    await file_json_overwrite(tasks_all_path, tasks_all);
    let task_number = object_property_get(task, task_property_number());
    await task_id_set_hash(task_number);

    function map(tasks_all) {
        list_add(tasks_all, task);
    }
}