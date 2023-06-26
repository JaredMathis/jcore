import { file_js_all_nodes_types_get_generic } from './get/generic.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function file_js_all_nodes_types_get() {
    arguments_assert(arguments, []);
    let lambda = function_names_each_map;
    let v = await file_js_all_nodes_types_get_generic(lambda);
    return v;
    metadata([]);
}