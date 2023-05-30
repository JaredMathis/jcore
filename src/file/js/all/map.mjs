import { file_js_map_multiple } from '../map/multiple.mjs';
import { file_js_all_path } from './path.mjs';
export async function file_js_all_map(function_name_mapper) {
    let all = await file_js_all_path();
    await file_js_map_multiple(function_name_mapper, all);
}