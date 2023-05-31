import { js_visit_nodes_all } from '../visit/nodes/all.mjs';
export function js_nodes_count(parsed, predicate) {
    let count = 0;
    js_visit_nodes_all(parsed, v => {
        let {node} = v;
        if (predicate(node)) {
            count++;
        }
    });
    return count;
}