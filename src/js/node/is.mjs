import { boolean_value_false } from '../../boolean/value/false.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
import { defined_is } from '../../defined/is.mjs';
import { js_node_property_type } from './property/type.mjs';
export function js_node_is(candidate) {
    arguments_assert(arguments, [defined_is]);
    let v_3 = not(candidate);
    if (v_3) {
        let v_4 = boolean_value_false();
        return v_4;
    }
    let v = js_node_property_type();
    let v_2 = object_property_exists(candidate, v);
    return v_2;
    metadata([]);
}