import { defined_is } from '../../../defined/is.mjs';
import { task_property_state } from '../state.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function task_property_state_set(task, value) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    return object_property_set(task, task_property_state(), value);
}