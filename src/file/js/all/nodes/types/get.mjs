import { metadata } from '../../../../../metadata.mjs';
import { js_visit_nodes_types_get } from '../../../../../js/visit/nodes/types/get.mjs';
import { file_js_all_map_args_if_function } from '../../map/args/if/function.mjs';
import { list_adder_unique_async } from '../../../../../list/adder/unique/async.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function file_js_all_nodes_types_get() {
    arguments_assert(arguments, []);
    let result = await list_adder_unique_async(async la => {
        await file_js_all_map_args_if_function(async function logic(args) {
            let {parsed} = args;
            let types = js_visit_nodes_types_get(parsed);
            for (let t of types) {
                la(t);
            }
        });
    });
    return result;
    metadata([]);
}