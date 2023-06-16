import { string_is } from '../../../../../string/is.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { function_input_add_type_default } from '../default.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_input_add_type_default_identifier(function_name, input_name, input_type, input_value_default) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_is,
        string_is
    ]);
    let result = await function_input_add_type_default(function_name, input_name, input_type, input_value_default);
    return result;
}