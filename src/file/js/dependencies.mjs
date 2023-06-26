import { arguments_assert } from '../../arguments/assert.mjs';
import { visit_ignore_duplicates_async } from '../../visit/ignore/duplicates/async.mjs';
import { metadata } from '../../metadata.mjs';
import { file_js_dependencies_non_recursive } from './dependencies/non/recursive.mjs';
import { list_add } from '../../list/add.mjs';
import { path_is } from '../../path/is.mjs';
export async function file_js_dependencies(file_path) {
    arguments_assert(arguments, [path_is]);
    let result = [];
    let v_5 = async function v_3(node) {
        let v_2 = await file_js_dependencies_non_recursive(node);
        return v_2;
    };
    let v_6 = function v_4(v) {
        let {node} = v;
        list_add(result, node);
    };
    await visit_ignore_duplicates_async(file_path, v_5, v_6);
    return result;
    metadata([]);
}