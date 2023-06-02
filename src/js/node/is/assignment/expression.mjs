import { js_node_is_type } from '../type.mjs';
export function js_node_is_assignment_expression(n) {
    return js_node_is_type(n, 'AssignmentExpression');
}