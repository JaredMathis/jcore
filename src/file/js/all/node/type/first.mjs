import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../map/args/if/function.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
import { list_add } from '../../../../../list/add.mjs';
export async function file_js_all_node_type_first(node_type) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result;
    await file_js_all_map_args_if_function(async function logic(args) {
        let {parsed} = args;
        js_nodes_each(parsed, n => js_node_is_type(n, node_type), n => {
            result = n;
            return true;
        });
    });
    return result;
    metadata([]);
}