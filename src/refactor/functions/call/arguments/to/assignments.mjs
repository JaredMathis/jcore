import { refactor_call_arguments_to_assignments } from '../../../../call/arguments/to/assignments.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function refactor_functions_call_arguments_to_assignments() {
    arguments_assert(arguments, []);
    await function_names_each_map(refactor_call_arguments_to_assignments);
    metadata([]);
}