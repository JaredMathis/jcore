import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_js_path_to_name } from '../../file/js/path/to/name.mjs';
import { list_map } from '../../list/map.mjs';
import { file_js_dependencies_non_recursive } from '../../file/js/dependencies/non/recursive.mjs';
import { file_js_dependencies } from '../../file/js/dependencies.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
import { boolean_is } from '../../boolean/is.mjs';
export async function function_dependencies_generic(function_name, recursive) {
    arguments_assert(arguments, [
        js_identifier_is,
        boolean_is
    ]);
    let file_path = function_name_to_file_path(function_name);
    let lambda = file_js_dependencies;
    let v_3 = not(recursive);
    if (v_3) {
        lambda = file_js_dependencies_non_recursive;
    }
    let d = await lambda(file_path);
    let v_4 = function v_2(file_path) {
        return {
            file_path,
            function_name: file_js_path_to_name(file_path)
        };
    };
    let v = list_map(d, v_4);
    return v;
    metadata([]);
}