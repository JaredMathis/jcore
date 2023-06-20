import { list_sort_string } from '../../../../../list/sort/string.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_visit_nodes_types_get } from '../../../../../js/visit/nodes/types/get.mjs';
import { file_js_all_map_args_if_function } from '../../map/args/if/function.mjs';
import { list_adder_unique_async } from '../../../../../list/adder/unique/async.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function file_js_all_nodes_types_get() {
    arguments_assert(arguments, []);
    let lambda = file_js_all_map_args_if_function;
    let result = await list_adder_unique_async(async function v(la) {
        await lambda(async function logic(args) {
            let {parsed} = args;
            let types = js_visit_nodes_types_get(parsed);
            for (let t of types) {
                la(t);
            }
        });
    });
    list_sort_string(result);
    return result;
    metadata([]);
}