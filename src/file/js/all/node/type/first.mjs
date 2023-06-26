import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
export async function file_js_all_node_type_first(node_type) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    let v_4 = async function logic(args) {
        let {parsed} = args;
        let v_5 = function v(n) {
            let v_3 = js_node_is_type(n, node_type);
            return v_3;
        };
        let v_6 = function v_2(n) {
            result = n;
            let v_7 = boolean_value_true();
            return v_7;
        };
        js_nodes_each(parsed, v_5, v_6);
    };
    await function_names_each_map(v_4);
    return result;
    metadata([]);
}