import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_to_declaration } from './to/declaration.mjs';
export async function function_inputs(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_to_declaration(function_name);
}