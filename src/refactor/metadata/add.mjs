import { refactor_metadata_missing_add } from './missing/add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { tautology } from '../../tautology.mjs';
import { metadata } from '../../metadata.mjs';
export async function refactor_metadata_add(args) {
    arguments_assert(arguments, [tautology]);
    await refactor_metadata_missing_add(args);
    await refactor_metadata_add_function(args, metadata);
}