import { function_inputs } from './inputs.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let inputs = await function_inputs(function_name_to_wrap);
}