import { js_node_call_expression_name_equal } from '../../../../../node/call/expression/name/equal.mjs';
import { js_visit_nodes_filter } from '../../../filter.mjs';
export function js_visit_nodes_call_expression_name_equal(parsed, name_expected, lambda) {
    js_visit_nodes_filter(parsed, node => js_node_call_expression_name_equal(node, name_expected), v => {
        let {node} = v;
        lambda(node);
    });
}