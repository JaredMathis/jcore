import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_delete } from '../file/delete.mjs';
import { function_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
export async function function_delete(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = await function_exists(function_name);
    assert(v);
    let file_path = function_name_to_file_path(function_name);
    await file_delete(file_path);
    metadata([]);
}