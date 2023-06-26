import { metadata } from '../../metadata.mjs';
import { refactor_unlambdaify } from '../unlambdaify.mjs';
import { function_names_each_map } from '../../function/names/each/map.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_functions_unlambdaify() {
    arguments_assert(arguments, []);
    await function_names_each_map(refactor_unlambdaify);
    metadata([]);
}