import { file_js_map } from '../map.mjs';
export async function file_js_multiple_map(function_name_mapper, multiple) {
    console.log({multiple})
    for (let m of multiple) {
        await file_js_map(function_name_mapper, m);
    }
}