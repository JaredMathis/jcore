import { metadata } from '../metadata.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_js_map } from '../file/js/map.mjs';
import { function_name_to_path } from './name/to/path.mjs';
export async function function_map(function_name_mapper, function_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let file_path = function_name_to_path(function_name);
    await file_js_map(function_name_mapper, file_path);
    metadata([]);
}