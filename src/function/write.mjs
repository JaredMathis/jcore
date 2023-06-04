import { string_identifier_is } from '../string/identifier/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_js_write } from '../file/js/write.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
export async function function_write(function_name, parsed) {
    arguments_assert(arguments, [
        string_identifier_is,
        tautology
    ]);
    let function_path = function_name_to_file_path(function_name);
    await file_js_write(function_path, parsed);
    return function_path;
    metadata([]);
}