import { refactor_call_arguments_to_assignments } from '../../../../call/arguments/to/assignments.mjs';
import { list_adder_unique_async } from '../../../../../list/adder/unique/async.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function refactor_functions_call_arguments_to_assignments() {
    arguments_assert(arguments, []);
    return await list_adder_unique_async(async la => {
        await file_js_all_map_args_if_function(refactor_call_arguments_to_assignments);
    });
    metadata([]);
}