import { metadata } from '../../metadata.mjs';
import { refactor_returnify } from '../returnify.mjs';
import { function_names_each_map_args } from '../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_functions_returnify() {
    arguments_assert(arguments, []);
    let v = {};
    await function_names_each_map_args(refactor_returnify, v);
    metadata([]);
}