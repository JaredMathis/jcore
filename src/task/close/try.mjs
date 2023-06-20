import { task_map_local } from '../map/local.mjs';
import { task_property_state_set } from '../property/state/set.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_property_closed } from '../property/closed.mjs';
export async function task_close_try(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = await task_map_local(task_number_string, t => task_property_state_set(t, task_property_closed()));
    return v;
}