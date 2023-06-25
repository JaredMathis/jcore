import { arguments_assert } from '../../../../arguments/assert.mjs';
import { refactor_metadata_missing_add } from '../../../metadata/missing/add.mjs';
import { function_names_each_map } from '../../../../function/names/each/map.mjs';
import { metadata } from '../../../../metadata.mjs';
export async function refactor_functions_metadata_missing_add() {
    arguments_assert(arguments, []);
    await function_names_each_map(refactor_metadata_missing_add);
    metadata([]);
}