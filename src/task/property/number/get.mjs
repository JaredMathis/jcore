import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { task_property_number } from '../number.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function task_property_number_get(task) {
    arguments_assert(arguments, [defined_is]);
    let v = task_property_number();
    let v_2 = object_property_get(task, v);
    return v_2;
    metadata([]);
}