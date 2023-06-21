import { js_node_is_call_expression } from '../../../../node/is/call/expression.mjs';
import { js_node_is } from '../../../../node/is.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { js_visit_nodes_filter } from '../../../nodes/filter.mjs';
export function js_visit_identifiers_not_call_expressions(node, lambda) {
    js_visit_nodes_filter(node, js_node_is_identifier, v_2);
    function v_2(v) {
        let {parent} = v;
        if (js_node_is(parent) && js_node_is_call_expression(parent)) {
            return;
        }
        let {node} = v;
        lambda(node);
    }
}