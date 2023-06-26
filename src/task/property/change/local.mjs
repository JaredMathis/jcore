import { metadata } from '../../../metadata.mjs';
import { task_map_local } from '../../map/local.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
export async function task_property_change_local(task_number_string, property_name, property_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = function map(task) {
        object_property_change(task, property_name, property_value);
    };
    await task_map_local(task_number_string, v);
    metadata([]);
}