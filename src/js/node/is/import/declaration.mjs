import { js_node_is } from '../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_import_declaration(node) {
    arguments_assert(arguments, [js_node_is]);
    let v_2 = 'ImportDeclaration';
    let v = js_node_is_type(node, v_2);
    return v;
    metadata([]);
}