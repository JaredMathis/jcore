import { metadata } from '../../../../../metadata.mjs';
import { function_inputs_index_of_string } from '../../../../inputs/index/of/string.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { function_input_swap_last_to } from '../to.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_input_swap_last_to_named(function_name, input_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let index_string = await function_inputs_index_of_string(function_name, input_name);
    let result = await function_input_swap_last_to(function_name, index_string);
    return result;
    metadata([]);
}