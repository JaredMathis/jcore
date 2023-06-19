import { defined_is } from '../../../defined/is.mjs';
import { speed_property_previous } from '../previous.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function speed_property_previous_get(speed) {
    arguments_assert(arguments, [defined_is]);
    return object_property_get(speed, speed_property_previous());
}