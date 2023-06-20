import { defined_is } from '../../../defined/is.mjs';
import { task_property_state } from '../state.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function task_property_state_set(task, value) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    let v = task_property_state();
    let v_2 = object_property_set(task, v, value);
    return v_2;
}