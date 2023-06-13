import { js_visit_nodes_filter } from '../visit/nodes/filter.mjs';
export function js_nodes_each(parsed, predicate, lambda) {
    js_visit_nodes_filter(parsed, predicate, v => {
        let {node} = v;
        lambda(node);
    });
}