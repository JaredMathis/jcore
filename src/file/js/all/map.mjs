import { file_js_map } from '../map.mjs';
import { file_js_all_path } from './path.mjs';
export async function file_js_all_map(function_name_mapper) {
    let all = await file_js_all_path();
    await file_js_map_multiple(all, function_name_mapper);
}

async function file_js_map_multiple(all, function_name_mapper) {
    for (let a of all) {
        await file_js_map(function_name_mapper, a);
    }
}
