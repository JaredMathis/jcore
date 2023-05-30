import { js_visit_nodes } from '../nodes.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
export function js_visit_nodes_identifier(parsed, lambda) {
    let predicate = node => js_node_is_identifier(node);
    js_visit_nodes(parsed, predicate, lambda);
}