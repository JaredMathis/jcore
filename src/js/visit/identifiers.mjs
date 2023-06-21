import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { js_visit_nodes_filter } from './nodes/filter.mjs';
export function js_visit_identifiers(node, v_2) {
    js_visit_nodes_filter(node, js_node_is_identifier, v_2);
}