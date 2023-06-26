import { defined_is } from '../../../defined/is.mjs';
import { task_property_title } from '../title.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function task_property_title_get(task) {
    arguments_assert(arguments, [defined_is]);
    let v = task_property_title();
    let v_2 = object_property_get(task, v);
    return v_2;
    metadata([]);
}