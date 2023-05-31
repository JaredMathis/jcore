import { metadata } from '../../metadata.mjs';
import { file_js_all } from '../../file/js/all.mjs';
export async function function_name_all() {
    let all = await file_js_all();
    return all;
    metadata([]);
}