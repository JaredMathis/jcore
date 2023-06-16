import { task_property_closed } from './property/closed.mjs';
import { task_property_state } from './property/state.mjs';
import { object_property_change } from '../object/property/change.mjs';
import { list_find_property } from '../list/find/property.mjs';
import { git_hub_repository_issues_close } from '../git/hub/repository/issues/close.mjs';
import { task_map } from './map.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_property_number } from './property/number.mjs';
import { integer_parse } from '../integer/parse.mjs';
import { task_open } from './open.mjs';
export async function task_close(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task_number = integer_parse(task_number_string);
    await git_hub_repository_issues_close(task_number);
    await task_map(function map(tasks_all) {
        let task = list_find_property(tasks_all, task_property_number(), task_number);
        object_property_change(task, task_property_state(), task_property_closed());
    });
    return await task_open();
}