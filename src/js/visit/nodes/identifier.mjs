import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { js_node_is } from '../../node/is.mjs';
import { js_visit } from '../../visit.mjs';
export function js_visit_nodes_identifier(parsed, lambda) {
    let predicate = node => js_node_is_identifier(node)
    js_visit(parsed, node => js_node_is(node) && predicate(node), lambda);
}