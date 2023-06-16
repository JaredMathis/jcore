import { task_property_set_local } from './property/set/local.mjs';
import { task_property_closed } from './property/closed.mjs';
import { task_property_state } from './property/state.mjs';
import { git_hub_repository_issue_close } from '../git/hub/repository/issue/close.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { integer_parse } from '../integer/parse.mjs';
import { task_open } from './open.mjs';
export async function task_close(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task_number = integer_parse(task_number_string);
    await git_hub_repository_issue_close(task_number);
    const property_name = task_property_state();
    const property_value = task_property_closed();
    await task_property_set_local(task_number_string, property_name, property_value);
    return await task_open();
}