import { js_node_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_type } from '../../type.mjs';
export function js_node_is_arrow_function_expression(node) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_is_type(node, 'ArrowFunctionExpression');
    return v;
    metadata([]);
}