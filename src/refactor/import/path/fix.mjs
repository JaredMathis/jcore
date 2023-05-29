import { function_name_to_path } from '../../../function/name/to/path.mjs';
import { js_import_all_with_function_names } from '../../../js/import/all/with/function/names.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { path_relative } from '../../../path/relative.mjs';
import { path_parent } from '../../../path/parent.mjs';
export function refactor_import_path_fix(args) {
    let {parsed, file_path} = args;
    let imports = js_import_all_with_function_names(parsed);
    for (let i of imports) {
        let function_name = object_property_get(i, 'name');
        let function_path = function_name_to_path(function_name);
        let file_path_directory = path_parent(function_path);
        let relative = path_relative(file_path, file_path_directory);
        console.log({
            function_path,
            file_path,
            relative
        });
    }
}