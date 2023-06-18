import { function_input_add_generic } from '../generic.mjs';
import { string_is } from '../../../../string/is.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_add_type_default(function_name, input_name, input_type, input_value_default) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_is,
        string_is
    ]);
    await function_input_add_generic(function_name, input_name, input_type, input_value_default, 0);
}