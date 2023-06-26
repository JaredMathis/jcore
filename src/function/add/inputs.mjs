import { metadata } from '../../metadata.mjs';
import { function_input_add_multiple } from '../input/add/multiple.mjs';
import { function_add } from '../add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
export async function function_add_inputs(function_name, inputs_string) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    await function_add(function_name);
    await function_input_add_multiple(function_name, inputs_string);
    metadata([]);
}