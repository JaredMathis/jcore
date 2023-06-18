import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is } from '../../is.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_variable_declaration(n) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_is_type(n, 'VariableDeclaration');
    return v;
}