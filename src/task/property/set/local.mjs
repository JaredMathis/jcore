import { object_property_change } from '../../../object/property/change.mjs';
import { task_property_number } from '../number.mjs';
import { list_find_property } from '../../../list/find/property.mjs';
import { task_map } from '../../map.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
export async function task_property_set_local(task_number_string, property_name, property_value) {
    let task_number = integer_parse(task_number_string);
    await task_map(function map(tasks_all) {
        let task = list_find_property(tasks_all, task_property_number(), task_number);
        object_property_change(task, property_name, property_value);
    });
}