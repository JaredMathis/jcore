import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { speed_property_previous } from '../previous.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function speed_property_previous_set(speed, value) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    let v = speed_property_previous();
    let v_2 = object_property_set(speed, v, value);
    return v_2;
    metadata([]);
}