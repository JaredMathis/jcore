import { file_js_map } from '../map.mjs';
export async function file_js_map_multiple(all, function_name_mapper) {
    for (let a of all) {
        await file_js_map(function_name_mapper, a);
    }
}