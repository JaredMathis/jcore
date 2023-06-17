import { js_visit_nodes_types_log } from '../../../../js/visit/nodes/types/log.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_adder_unique } from '../../../../list/adder/unique.mjs';
export async function refactor_functions_exclamation_to_not() {
    arguments_assert(arguments, []);
    list_adder_unique(la => {
        
    })
    await file_js_all_map_args_if_function(async function logic(args) {
        let {parsed} = args;
        js_visit_nodes_types_log(parsed);
    });
    metadata([]);
}