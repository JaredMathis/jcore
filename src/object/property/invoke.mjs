import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from './exists.mjs';
import { object_property_get } from './get.mjs';
export function object_property_invoke(default_value, object, property_name) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    let result = default_value;
    if (object_property_exists(object, property_name)) {
        result = object_property_get(object, property_name)();
    }
    return result;
    metadata([]);
}