import { file_js_all } from "../all.mjs";
import { file_js_map } from "../map.mjs";

export function file_js_all_map(function_name_mapper) {
    let all = await file_js_all();
    for (let a of all) {
        await file_js_map(function_name_mapper, a);
    }
}