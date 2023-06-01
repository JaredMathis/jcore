import { visit_ignore_duplicates_async } from '../../visit/ignore/duplicates/async.mjs';
import { metadata } from '../../metadata.mjs';
import { file_js_dependencies_non_recursive } from './dependencies/non/recursive.mjs';
import { list_add } from '../../list/add.mjs';
export async function file_js_dependencies(file_path) {
    let result = [];
    await visit_ignore_duplicates_async(file_path, async node => {
        return await file_js_dependencies_non_recursive(node);
    }, v => {
        let {node} = v;
        list_add(result, node);
    });
    return result;
    metadata([]);
}