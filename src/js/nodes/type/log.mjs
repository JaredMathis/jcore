import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_is_type } from '../../node/is/type.mjs';
import { js_nodes_get } from '../get.mjs';
import { log_json } from '../../../log/json.mjs';
export function js_nodes_type_log(parsed, node_type) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_4 = function v_2(n) {
        let v_3 = js_node_is_type(n, node_type);
        return v_3;
    };
    let v = js_nodes_get(parsed, v_4);
    log_json(v);
    metadata([]);
}