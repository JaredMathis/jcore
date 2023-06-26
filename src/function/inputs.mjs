import { metadata } from '../metadata.mjs';
import { js_function_declaration_to_params_names } from '../js/function/declaration/to/params/names.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_name_to_declaration } from './name/to/declaration.mjs';
export async function function_inputs(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let function_declaration = await function_name_to_declaration(function_name);
    let mapped = js_function_declaration_to_params_names(function_declaration);
    return mapped;
    metadata([]);
}