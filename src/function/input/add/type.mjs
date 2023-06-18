import { function_input_add_generic_last } from './generic/last.mjs';
import { function_input_value_default } from '../value/default.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_add_type(function_name, input_name, input_type) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_is
    ]);
    let input_value_default = function_input_value_default();
    await function_input_add_generic_last(function_name, input_name, input_type, input_value_default);
}