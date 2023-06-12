import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_to_declaration } from './to/declaration.mjs';
export async function function_inputs(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let fd = await function_to_declaration(function_name);
    console.log({fd})
}