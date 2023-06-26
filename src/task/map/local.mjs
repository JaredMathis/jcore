import { metadata } from '../../metadata.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_find_property } from '../../list/find/property.mjs';
import { task_property_number } from '../property/number.mjs';
import { tasks_all_map } from '../../tasks/all/map.mjs';
import { integer_parse } from '../../integer/parse.mjs';
export async function task_map_local(task_number_string, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let task_number = integer_parse(task_number_string);
    let v_2 = function map_all(tasks_all) {
        let v = task_property_number();
        let task = list_find_property(tasks_all, v, task_number);
        map(task);
    };
    await tasks_all_map(v_2);
    metadata([]);
}