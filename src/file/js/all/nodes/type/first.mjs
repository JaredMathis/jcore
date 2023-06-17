import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { list_sort_string } from '../../../../../list/sort/string.mjs';
import { file_js_all_map_args_if_function } from '../../map/args/if/function.mjs';
import { list_adder_unique_async } from '../../../../../list/adder/unique/async.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function file_js_all_nodes_type_first(node_type) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await list_adder_unique_async(async la => {
        await file_js_all_map_args_if_function(async function logic(args) {
            let {parsed} = args;
            let types = js_nodes_each(parsed);
            for (let t of types) {
                la(t);
            }
        });
    });
    list_sort_string(result);
    return result;
    metadata([]);
}