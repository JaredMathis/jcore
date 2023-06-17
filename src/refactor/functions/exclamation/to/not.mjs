import { list_adder_unique_async } from '../../../../list/adder/unique/async.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_visit_nodes_types_get } from '../../../../js/visit/nodes/types/get.mjs';
export async function refactor_functions_exclamation_to_not() {
    arguments_assert(arguments, []);
    return await list_adder_unique_async(async la => {
        await file_js_all_map_args_if_function(async function logic(args) {
            let {parsed} = args;
            let types = js_visit_nodes_types_get(parsed);
            for (let t of types) {
                la(t);
            }
        });
    });
    metadata([]);
}