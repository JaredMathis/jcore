import { js_node_is_program } from '../../../../node/is/program.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_import_all_with_function_names } from '../../with/function/names.mjs';
export async function js_import_all_to_function_name(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let with_function_names = await js_import_all_with_function_names(parsed);
    let result = list_map(with_function_names, function v(w) {
        return object_property_get(w, 'name');
    });
    return result;
    metadata([]);
}