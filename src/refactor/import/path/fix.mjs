import { function_name_to_path } from '../../../function/name/to/path.mjs';
import { js_import_all_with_function_names } from '../../../js/import/all/with/function/names.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function refactor_import_path_fix() {
    let imports = js_import_all_with_function_names(parsed);
    for (let i of imports) {
        let function_name = object_property_get(i, 'name');
        let function_path = function_name_to_path(function_name)
    }
}