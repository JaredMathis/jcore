import { metadata } from '../../metadata.mjs';
import { js_node_is_callable } from '../node/is/callable.mjs';
import { js_nodes_count } from '../nodes/count.mjs';
export function js_callable_multiple(parsed) {
    let count = js_nodes_count(parsed, js_node_is_callable);
    return count >= 2;
    metadata([]);
}