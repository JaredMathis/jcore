import { js_node_is } from '../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_assignment_expression(n) {
    arguments_assert(arguments, [js_node_is]);
    return js_node_is_type(n, 'AssignmentExpression');
}