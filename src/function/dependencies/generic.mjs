import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_js_path_to_name } from '../../file/js/path/to/name.mjs';
import { list_map } from '../../list/map.mjs';
import { file_js_dependencies_non_recursive } from '../../file/js/dependencies/non/recursive.mjs';
import { file_js_dependencies } from '../../file/js/dependencies.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
export async function function_dependencies_generic(function_name, recursive) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let file_path = function_name_to_file_path(function_name);
    let lambda = file_js_dependencies;
    if (!recursive) {
        lambda = file_js_dependencies_non_recursive;
    }
    let d = await file_js_dependencies(file_path);
    return list_map(d, file_path => {
        return {
            file_path,
            function_name: file_js_path_to_name(file_path)
        };
    });
}