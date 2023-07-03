import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_is } from '../../string/is.mjs';
import { assert } from '../../assert.mjs';
import { object_property_exists } from './exists.mjs';
export function object_property_remove(object, property_name) {
    arguments_assert(arguments, [
        defined_is,
        string_is
    ]);
    assert(object_property_exists(object, property_name));
    delete object[property_name];
    metadata([]);
}