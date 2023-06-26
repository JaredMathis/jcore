import { metadata } from '../../metadata.mjs';
import { task_map_local } from '../map/local.mjs';
import { task_property_state_set } from '../property/state/set.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_property_closed } from '../property/closed.mjs';
export async function task_close_try(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_3 = function v_2(t) {
        let v_4 = task_property_closed();
        let v_5 = task_property_state_set(t, v_4);
        return v_5;
    };
    let v = await task_map_local(task_number_string, v_3);
    return v;
    metadata([]);
}