import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../map/args/if/function.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function file_js_all_nodes_type_first(node_type) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await file_js_all_map_args_if_function(async function logic(args) {
        let {parsed} = args;
        let types = js_nodes_each(parsed);
        for (let t of types) {
            la(t);
        }
    });
    return result;
    metadata([]);
}