import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { function_input_add_type_default } from '../default.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_input_add_type_default_identifier(function_name, input_name, input_type) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        js_identifier_is
    ]);
    let result = await function_input_add_type_default(function_name, input_name, input_type, input_name);
    return result;
}