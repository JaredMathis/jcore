import { boolean_value_true } from '../../boolean/value/true.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_initialize_generic } from './initialize/generic.mjs';
import { string_is } from '../../string/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function object_property_ensure(object, property_name, initial_value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    let ensure = boolean_value_true();
    object_property_initialize_generic(object, property_name, initial_value, ensure);
    metadata([]);
}