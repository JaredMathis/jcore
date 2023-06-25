import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from './exists.mjs';
import { object_property_get } from './get.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_is } from '../../string/is.mjs';
export function object_property_invoke(default_value, object, property_name) {
    arguments_assert(arguments, [
        defined_is,
        defined_is,
        string_is
    ]);
    let result = default_value;
    let v = object_property_exists(object, property_name);
    if (v) {
        result = object_property_get(object, property_name)();
    }
    return result;
    metadata([]);
}