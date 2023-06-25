import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
export async function file_js_all_node_type_first(node_type) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    await function_names_each_map(async function logic(args) {
        let {parsed} = args;
        js_nodes_each(parsed, function v(n) {
            let v_3 = js_node_is_type(n, node_type);
            return v_3;
        }, function v_2(n) {
            result = n;
            return true;
        });
    });
    return result;
    metadata([]);
}