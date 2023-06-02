import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { visit_ignore_duplicates_async } from '../../visit/ignore/duplicates/async.mjs';
import { metadata } from '../../metadata.mjs';
import { file_js_dependencies_non_recursive } from './dependencies/non/recursive.mjs';
import { list_add } from '../../list/add.mjs';
export async function file_js_dependencies(file_path) {
    arguments_assert(arguments, [tautology]);
    let result = [];
    await visit_ignore_duplicates_async(file_path, async node => {
        let lambda = file_js_dependencies_non_recursive;
        if (false) {
        }
        return await lambda(node);
    }, v => {
        let {node} = v;
        list_add(result, node);
    });
    return result;
    metadata([]);
}