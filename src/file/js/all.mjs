import { file_js_path_all_to_name } from './path/all/to/name.mjs';
import { file_js_all_path } from './all/path.mjs';
export async function file_js_all() {
    let filtered = await file_js_all_path();
    let mapped4 = file_js_path_all_to_name(filtered);
    return mapped4;
}