import { metadata } from '../../../../metadata.mjs';
import { file_js_all_nodes_types_get_generic } from '../../all/nodes/types/get/generic.mjs';
import { file_js_all_map_args_if_function } from '../../all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function file_js_nodes_types_get() {
    arguments_assert(arguments, []);
    let lambda = file_js_all_map_args_if_function;
    return await file_js_all_nodes_types_get_generic(lambda);
    metadata([]);
}