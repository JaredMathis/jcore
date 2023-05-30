import { file_js_path_all_to_name } from './path/all/to/name.mjs';
import { file_js_all_path } from './all/path.mjs';
export async function file_js_all() {
    let paths = await file_js_all_path();
    let names = file_js_path_all_to_name(paths);
    return names;
}