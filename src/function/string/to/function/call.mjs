import { refactor_string_to_function_call } from '../../../../refactor/string/to/function/call.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_map_with_args } from '../../../map/with/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { string_is } from '../../../../string/is.mjs';
export async function function_string_to_function_call(function_name, string_value, replacement_function_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is,
        js_identifier_is
    ]);
    let v = function_name_get(refactor_string_to_function_call);
    let v_2 = {
        string_value,
        replacement_function_name
    };
    await function_map_with_args(v, function_name, v_2);
}