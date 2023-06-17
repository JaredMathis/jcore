import { js_visit_nodes_types_log } from '../../../../js/visit/nodes/types/log.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_functions_exclamation_to_not() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        let {function_declaration} = args;
        js_visit_nodes_types_log();
    });
    metadata([]);
}