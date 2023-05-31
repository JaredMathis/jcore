import { js_function_name_to_export } from '../../../../function/name/to/export.mjs';
import { js_parse } from '../../../../parse.mjs';
export function js_code_function_name_to_parsed(function_name) {
    return js_parse(js_function_name_to_export(function_name));
}