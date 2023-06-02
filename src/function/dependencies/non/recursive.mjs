import { metadata } from '../../../metadata.mjs';
import { function_dependencies_generic } from '../generic.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_dependencies_non_recursive(function_name) {
    arguments_assert(arguments, [tautology]);
    let recursive = true;
    return await function_dependencies_generic(function_name, recursive);
    metadata([]);
}