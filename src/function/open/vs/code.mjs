import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_open_vs_code } from '../../../file/open/vs/code.mjs';
import { function_name_to_file_path } from '../../name/to/file/path.mjs';
export async function function_open_vs_code(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let function_path = function_name_to_file_path(function_name);
    await file_open_vs_code(function_path);
    metadata([]);
}