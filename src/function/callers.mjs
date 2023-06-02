import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { file_js_all } from '../file/js/all.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let all = await file_js_all();
    return all;
}