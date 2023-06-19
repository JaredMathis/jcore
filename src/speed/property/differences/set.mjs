import { defined_is } from '../../../defined/is.mjs';
import { speed_property_differences } from '../differences.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function speed_property_differences_set(speed, value) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    return object_property_set(speed, speed_property_differences(), value);
}