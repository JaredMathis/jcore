import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_add_with_body_error } from './add/with/body/error.mjs';
import { file_open_vs_code } from '../file/open/vs/code.mjs';
export async function function_add(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_path = await function_add_with_body_error(function_name);
    await file_open_vs_code(function_path);
    metadata([]);
}