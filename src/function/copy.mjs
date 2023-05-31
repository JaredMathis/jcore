import { js_export_function_single } from '../js/export/function/single.mjs';
import { js_code_function_name_to_parsed } from '../js/code/function/name/to/parsed.mjs';
import { function_add_with_declaration } from './add/with/declaration.mjs';
export function function_copy(function_name_to_copy, function_name_of_copy) {
    let parsed = js_code_function_name_to_parsed();
    let fd = js_export_function_single(parsed);
    function_add_with_declaration(function_name_of_copy, fd);
}