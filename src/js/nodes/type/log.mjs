import { js_node_is_type } from '../../node/is/type.mjs';
import { js_nodes_get } from '../get.mjs';
import { log_json } from '../../../log/json.mjs';
export function js_nodes_type_log(parsed, node_type) {
    let v = js_nodes_get(parsed, n => js_node_is_type(n, node_type));
    log_json(v);
}