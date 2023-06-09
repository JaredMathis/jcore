import { file_js_map_args } from '../../map/args.mjs';
import { path_is } from '../../../../path/is.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_nodes_types_get_generic } from '../../all/nodes/types/get/generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function file_js_nodes_types_get(file_path) {
    arguments_assert(arguments, [path_is]);
    let lambda = function v_2(mapper) {
        let v_3 = file_js_map_args(file_path, mapper);
        return v_3;
    };
    let v = await file_js_all_nodes_types_get_generic(lambda);
    return v;
    metadata([]);
}