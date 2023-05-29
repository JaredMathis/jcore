import { function_name_to_path } from './name/to/path.mjs';
import { directory_exists } from '../directory/exists.mjs';
export async function function_exists(function_name) {
    let function_path = function_name_to_path(function_name);
    await directory_exists(function_path);
}