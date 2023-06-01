import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_get } from '../get.mjs';
import { object_property_initialize_if_unset } from '../initialize/if/unset.mjs';
export function object_property_get_initialize(data, property_name, intial_value) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    object_property_initialize_if_unset(data, property_name, intial_value);
    return object_property_get(data, property_name);
    metadata([]);
}