import { file_js_parse } from '../file/js/parse.mjs';
import { js_export_function_single } from '../js/export/function/single.mjs';
import { function_add_with_declaration } from './add/with/declaration.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export function function_copy(function_name_to_copy, function_name_of_copy) {
    let file_path = function_name_to_path(function_name_to_copy);
    let parsed = file_js_parse(file_path);
    let fd = js_export_function_single(parsed);
    function_add_with_declaration(function_name_of_copy, fd);
}