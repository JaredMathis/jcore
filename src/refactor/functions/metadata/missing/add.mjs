import { arguments_assert } from '../../../../arguments/assert.mjs';
import { refactor_metadata_missing_add } from '../../../metadata/missing/add.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
export async function refactor_functions_metadata_missing_add() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(refactor_metadata_missing_add);
    metadata([]);
}