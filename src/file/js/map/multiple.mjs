import { file_js_map } from '../map.mjs';
export async function file_js_map_multiple(function_name_mapper, multiple) {
    for (let m of multiple) {
        await file_js_map(function_name_mapper, m);
    }
}