import { defined_is } from '../../../../defined/is.mjs';
import { js_node_property_name } from '../name.mjs';
import { object_property_set } from '../../../../object/property/set.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_property_name_set(js_node) {
    arguments_assert(arguments, [defined_is]);
    return object_property_set(js_node, js_node_property_name(), value);
}