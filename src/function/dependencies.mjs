import { file_js_dependencies } from '../file/js/dependencies.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export async function function_dependencies(function_name) {
    let file_path = function_name_to_path(function_name);
    return await file_js_dependencies(file_path);
}