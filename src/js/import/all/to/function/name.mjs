import { array_map } from '../../../../../array/map.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_import_all_with_function_names } from '../../with/function/names.mjs';
export async function js_import_all_to_function_name(parsed) {
    let with_function_names = await js_import_all_with_function_names(parsed);
    let result = array_map(with_function_names, w => object_property_get(w, 'name'));
    return result;
}