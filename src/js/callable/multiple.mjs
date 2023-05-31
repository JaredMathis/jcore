import { js_node_is_callable } from '../node/is/callable.mjs';
import { js_nodes_count } from '../nodes/count.mjs';
export function js_callable_multiple(parsed) {
    let count = js_nodes_count(parsed, js_node_is_callable);
    let js_callable_multiple = count >= 2;
    return js_callable_multiple;
}