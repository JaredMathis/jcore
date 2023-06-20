import { js_visit_nodes_types_get } from '../../../../../js/visit/nodes/types/get.mjs';
import { file_js_map_args } from '../../../../../file/js/map/args.mjs';
import { function_name_to_file_path } from '../../file/path.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_name_to_node_type_first(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let file_path = function_name_to_file_path(function_name);
    let result = await file_js_map_args(file_path, mapper);
    async function mapper(args) {
        let {parsed} = args;
        let types = js_visit_nodes_types_get(parsed);
        for (let t of types) {
            la(t);
        }
    }
    return result;
}