import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_is_type } from './type.mjs';
import { js_node_is } from '../is.mjs';
export function js_node_is_identifier(node) {
    arguments_assert(arguments, [js_node_is]);
    return js_node_is_type(node, 'Identifier');
    metadata([]);
}