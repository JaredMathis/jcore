import { file_js_dependencies_non_recursive } from './dependencies/non/recursive.mjs';
export async function file_js_dependencies(file_path) {
    return await file_js_dependencies_non_recursive(file_path);
}