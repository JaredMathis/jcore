import {file_js_map} from '../file/js/map.mjs'
export async function function_map(function_name_mapper, function_name) {
    let file_path = function_name_to_path(function_name);
    await file_js_map(function_name_mapper, file_path);
}