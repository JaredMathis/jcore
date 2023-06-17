import { defined_is } from '../../../defined/is.mjs';
import { task_property_number } from '../number.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function task_property_number_get(task) {
    arguments_assert(arguments, [defined_is]);
    return object_property_get(task, task_property_number());
}