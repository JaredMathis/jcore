import { js_function_declaration_to_params_names } from '../js/function/declaration/to/params/names.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_to_declaration } from './to/declaration.mjs';
export async function function_inputs(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_declaration = await function_to_declaration(function_name);
    let mapped = js_function_declaration_to_params_names(function_declaration);
    return mapped;
}