import { js_node_is_program } from '../../../../node/is/program.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_import_all_with_function_names } from '../../with/function/names.mjs';
export async function js_import_all_to_function_name(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let with_function_names = await js_import_all_with_function_names(parsed);
    let v_3 = function v(w) {
        let v_4 = 'name';
        let v_2 = object_property_get(w, v_4);
        return v_2;
    };
    let result = list_map(with_function_names, v_3);
    return result;
    metadata([]);
}