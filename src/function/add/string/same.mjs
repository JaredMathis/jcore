import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { function_add_string } from '../string.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_add_string_same(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = await function_add_string(function_name, function_name);
    return result;
}