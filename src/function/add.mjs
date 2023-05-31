import { metadata } from '../metadata.mjs';
import { function_add_with_body_error } from './add/with/body/error.mjs';
import { file_open_vs_code } from '../file/open/vs/code.mjs';
export async function function_add(function_name) {
    let function_path = await function_add_with_body_error(function_name);
    await file_open_vs_code(function_path);
    metadata([]);
}