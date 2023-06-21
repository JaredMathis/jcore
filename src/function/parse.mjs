import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_js_parse } from '../file/js/parse.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
export async function function_parse(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let file_path = function_name_to_file_path(function_name);
    let parsed = await file_js_parse(file_path);
    return parsed;
    metadata([]);
}