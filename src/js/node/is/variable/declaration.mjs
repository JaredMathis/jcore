import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_variable_declaration() {
    arguments_assert(arguments, []);
    return js_node_is_type(n, 'VariableDeclaration');
}