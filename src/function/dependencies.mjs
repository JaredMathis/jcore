import { string_identifier_is } from '../string/identifier/is.mjs';
import { function_dependencies_generic } from './dependencies/generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function function_dependencies(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let recursive = true;
    return await function_dependencies_generic(function_name, recursive);
    metadata([]);
}