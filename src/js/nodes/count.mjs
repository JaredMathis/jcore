import { log } from '../../log.mjs';
import { js_unparse } from '../unparse.mjs';
import { js_visit_nodes_all } from '../visit/nodes/all.mjs';
export function js_nodes_count(parsed, predicate) {
    let count = 0;
    log(js_unparse(parsed))
    js_visit_nodes_all(parsed, v => {
        let {node} = v;
        if (predicate(node)) {
            log(node)
            count++;
        }
    });
    return count;
}