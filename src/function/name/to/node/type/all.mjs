import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
import { js_nodes_get } from '../../../../../js/nodes/get.mjs';
import { function_parse } from '../../../../parse.mjs';
export async function function_name_to_node_type_all(function_name, node_type_name) {
    let parsed = await function_parse(function_name);
    let filtered = js_nodes_get(parsed, n => js_node_is_type(n, node_type_name));
    return filtered;
}