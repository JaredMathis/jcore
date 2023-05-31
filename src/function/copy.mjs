import { js_id_name_set } from '../js/id/name/set.mjs';
import { function_parse } from './parse.mjs';
import { js_export_function_single } from '../js/export/function/single.mjs';
import { function_add_with_declaration } from './add/with/declaration.mjs';
export async function function_copy(function_name_to_copy, function_name_of_copy) {
    let parsed = await function_parse(function_name_to_copy);
    let fd = js_export_function_single(parsed);
    js_id_name_set(fd, function_name_of_copy);
    function_add_with_declaration(function_name_of_copy, fd);
}