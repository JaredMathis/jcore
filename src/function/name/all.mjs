import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_js_all } from '../../file/js/all.mjs';
export async function function_name_all() {
    arguments_assert(arguments, []);
    let all = await file_js_all();
    return all;
    metadata([]);
}