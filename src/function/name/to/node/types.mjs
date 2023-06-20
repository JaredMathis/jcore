import { path_is } from '../../../../path/is.mjs';
import { file_js_nodes_types_get } from '../../../../file/js/nodes/types/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_name_to_node_types(file_path) {
    arguments_assert(arguments, [path_is]);
    let result = await file_js_nodes_types_get(file_path);
    return result;
}