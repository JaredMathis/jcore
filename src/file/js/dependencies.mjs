import { file_js_parse } from './parse.mjs';
export async function file_js_dependencies(file_path) {
    let parsed = await file_js_parse(file_path);

    
}