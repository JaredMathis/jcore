import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
import { defined_is } from '../../defined/is.mjs';
import { js_node_property_type } from './property/type.mjs';
export function js_node_is(candidate) {
    arguments_assert(arguments, [defined_is]);
    if (not(candidate)) {
        return false;
    }
    return object_property_exists(candidate, js_node_property_type());
    metadata([]);
}