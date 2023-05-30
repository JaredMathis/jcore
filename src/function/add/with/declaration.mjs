import { file_js_write } from '../../../file/js/write.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
export async function function_add_with_declaration(function_name, parsed) {
    let function_path = function_name_to_path(function_name);
    await file_js_write(function_path, parsed);
    return function_path;
}