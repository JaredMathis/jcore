import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_dependencies_generic } from '../generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_dependencies_non_recursive(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let recursive = false;
    return await function_dependencies_generic(function_name, recursive);
    metadata([]);
}