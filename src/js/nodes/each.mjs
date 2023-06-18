import { js_visit_nodes_filter } from '../visit/nodes/filter.mjs';
export function js_nodes_each(parsed, predicate, lambda) {
    js_visit_nodes_filter(parsed, predicate, function v_3(v) {
        let {node} = v;
        let v_2 = lambda(node);
        return v_2;
    });
}