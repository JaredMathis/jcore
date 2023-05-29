import { file_open_vs_code } from '../../../file/open/vs/code.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
export async function function_open_vs_code(function_name) {
    let function_path = function_name_to_path(function_name);
    await file_open_vs_code(function_path);
}