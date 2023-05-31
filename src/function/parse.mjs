import { file_js_parse } from '../file/js/parse.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export function function_parse(function_name_to_copy) {
    let file_path = function_name_to_path(function_name_to_copy);
    let parsed = file_js_parse(file_path);
    return parsed;
}