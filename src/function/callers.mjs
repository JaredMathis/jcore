import { function_name_list_to_file_path } from './name/list/to/file/path.mjs';
import { function_callers_names } from './callers/names.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = await function_callers_names(function_name);
    let v = function_name_list_to_file_path(result);
    return v;
}