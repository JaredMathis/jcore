import { function_callers_names } from './callers/names.mjs';
import { list_to_dictionary } from '../list/to/dictionary.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
export async function function_callers(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_callers_names(function_name);
    return list_to_dictionary(result, function_name_to_file_path);
}