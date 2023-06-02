import { function_dependencies_generic } from './dependencies/generic.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function function_dependencies(function_name) {
    arguments_assert(arguments, [tautology]);
    let recursive = true;
    return await function_dependencies_generic(function_name, recursive);
    metadata([]);
}