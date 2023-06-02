import { js_export_function_single } from '../../../js/export/function/single.mjs';
import { function_parse } from '../../parse.mjs';
export async function function_parse_to_declaration(function_name) {
    let parsed = await function_parse(function_name);
    let fd = js_export_function_single(parsed);
    return fd;
}