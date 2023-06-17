import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is } from '../../is.mjs';
export function js_node_is_return_statement(node) {
    arguments_assert(arguments, [js_node_is]);
    return object_property_get(node, 'ReturnStatement');
}