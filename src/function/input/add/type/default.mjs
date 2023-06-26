import { metadata } from '../../../../metadata.mjs';
import { function_input_add_generic_last } from '../generic/last.mjs';
import { string_is } from '../../../../string/is.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_add_type_default(function_name, input_name, input_type, input_value_default) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        js_identifier_is,
        string_is
    ]);
    await function_input_add_generic_last(function_name, input_name, input_type, input_value_default);
    metadata([]);
}