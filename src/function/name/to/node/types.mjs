import { metadata } from '../../../../metadata.mjs';
import { file_js_nodes_types_get } from '../../../../file/js/nodes/types/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { function_name_to_file_path } from '../file/path.mjs';
export async function function_name_to_node_types(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let file_path = function_name_to_file_path(function_name);
    let result = await file_js_nodes_types_get(file_path);
    return result;
    metadata([]);
}