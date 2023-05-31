import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_member_expression(n) {
    return js_node_is_type(n, 'MemberExpression');
    metadata([]);
}