import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_js_path_to_name } from '../file/js/path/to/name.mjs';
import { file_js_dependencies } from '../file/js/dependencies.mjs';
import { list_map } from '../list/map.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
import { file_js_dependencies_non_recursive } from '../file/js/dependencies/non/recursive.mjs';
export async function function_dependencies(function_name) {
    arguments_assert(arguments, [tautology]);
    let file_path = function_name_to_file_path(function_name);
    let lambda = file_js_dependencies;
    if (false) {
        lambda = file_js_dependencies_non_recursive;
    }
    let d = await file_js_dependencies(file_path);
    return list_map(d, file_path => {
        return {
            file_path,
            function_name: file_js_path_to_name(file_path)
        };
    });
    metadata([]);
}