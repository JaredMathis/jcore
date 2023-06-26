import { js_node_is } from '../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_function_declaration(d) {
    arguments_assert(arguments, [js_node_is]);
    let v_2 = 'FunctionDeclaration';
    let v = js_node_is_type(d, v_2);
    return v;
    metadata([]);
}