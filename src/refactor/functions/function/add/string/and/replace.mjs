import { refactor_functions_string_to_function_call } from '../../../../string/to/function/call.mjs';
import { function_add_string } from '../../../../../../function/add/string.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../../../js/identifier/is.mjs';
import { string_is } from '../../../../../../string/is.mjs';
export async function refactor_functions_function_add_string_and_replace(function_name, string_value) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is
    ]);
    await function_add_string(function_name, string_value);
    await refactor_functions_string_to_function_call(function_name, string_value);
    metadata([]);
}