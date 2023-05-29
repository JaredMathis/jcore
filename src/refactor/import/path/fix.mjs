import { function_name_to_path } from '../../../function/name/to/path.mjs';
import { js_import_all_with_function_names } from '../../../js/import/all/with/function/names.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { path_relative_file } from '../../../path/relative/file.mjs';
import { path_parent } from '../../../path/parent.mjs';
import { js_node_is_literal } from '../../../js/node/is/literal.mjs';
export function refactor_import_path_fix(args) {
    let {parsed, file_path} = args;
    let imports = js_import_all_with_function_names(parsed);
    for (let iw of imports) {
        let function_name = object_property_get(iw, 'name');
        let function_path = function_name_to_path(function_name);
        let relative = path_relative_file(file_path, function_path);
        
        let i = object_property_get(iw, 'import');
        let source = object_property_get(i, 'source');
        if (!js_node_is_literal(source)) {
            continue;
        }
        console.log({
            function_path,
            file_path,
            relative,
            source
        });
    }
}