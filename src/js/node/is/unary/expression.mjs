import { arguments_assert } from '../../../../arguments/assert.mjs';
import { equal } from '../../../../equal.mjs';
import { js_node_is } from '../../is.mjs';
import { js_node_type_get } from '../../type/get.mjs';
export function js_node_is_unary_expression(node) {
    arguments_assert(arguments, [js_node_is]);
    return equal(js_node_type_get(node), 'UnaryExpression');
}