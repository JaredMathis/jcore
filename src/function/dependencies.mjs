import { js_identifier_is } from '../js/identifier/is.mjs';
import { function_dependencies_generic } from './dependencies/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function function_dependencies(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let recursive = true;
    let v = await function_dependencies_generic(function_name, recursive);
    return v;
    metadata([]);
}