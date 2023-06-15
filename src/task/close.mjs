import { git_hub_repository_issues_close } from '../git/hub/repository/issues/close.mjs';
import { list_add } from '../list/add.mjs';
import { task_map } from './map.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_filter } from '../list/filter.mjs';
import { equal } from '../equal.mjs';
import { task_property_number } from './property/number.mjs';
export async function task_close(task_number) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let data = await git_hub_repository_issues_close(task_number);
    await task_map(function map(tasks_all) {
        let task = list_find_property(tasks_all, task_property_number(), task_number);
        object_property_change(task, task_property_state(), task_property_closed())
    });
}