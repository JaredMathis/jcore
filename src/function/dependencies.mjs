import { metadata } from '../metadata.mjs';
import { file_js_path_to_name } from '../file/js/path/to/name.mjs';
import { file_js_dependencies } from '../file/js/dependencies.mjs';
import { list_map } from '../list/map.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export async function function_dependencies(function_name) {
    let file_path = function_name_to_path(function_name);
    let d = await file_js_dependencies(file_path);
    return list_map(d, file_path => {
        return {
            file_path,
            function_name: file_js_path_to_name(file_path)
        };
    });
    metadata([]);
}