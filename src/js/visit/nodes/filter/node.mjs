import { js_visit_nodes_filter } from '../filter.mjs';
export function js_visit_nodes_filter_node(parsed, predicate, lambda) {
    js_visit_nodes_filter(parsed, predicate, v => {
        let {node} = v;
        lambda(node);
    });
}