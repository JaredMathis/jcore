import { visit_async } from '../../visit/async.mjs';
import { metadata } from '../../metadata.mjs';
import { file_js_dependencies_non_recursive } from './dependencies/non/recursive.mjs';
export async function file_js_dependencies(file_path) {
    visit_async(file_path, async node => {
        return await file_js_dependencies_non_recursive(node);
    }, v => {
        let {node} = v;
    });
    metadata([]);
}