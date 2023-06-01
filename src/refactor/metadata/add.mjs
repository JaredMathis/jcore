import { refactor_metadata_missing_add } from './missing/add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { tautology } from '../../tautology.mjs';
export async function refactor_metadata_add(args) {
    arguments_assert(arguments, [tautology]);
    await refactor_metadata_missing_add(args);
    let {parsed, function_declaration} = args;
}