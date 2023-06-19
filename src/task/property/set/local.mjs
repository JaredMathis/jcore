import { object_property_change } from '../../../object/property/change.mjs';
import { task_property_number } from '../number.mjs';
import { list_find_property } from '../../../list/find/property.mjs';
import { tasks_all_map } from '../../../tasks/all/map.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
export async function task_property_set_local(task_number_string, property_name, property_value) {
    let task_number = integer_parse(task_number_string);
    await tasks_all_map(function map(tasks_all) {
        let v = task_property_number();
        let task = list_find_property(tasks_all, v, task_number);
        object_property_change(task, property_name, property_value);
    });
}