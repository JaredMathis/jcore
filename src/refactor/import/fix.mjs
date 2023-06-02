import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { refactor_multiple } from '../multiple.mjs';
import { refactor_import_missing } from './missing.mjs';
import { refactor_import_unused } from './unused.mjs';
import { refactor_import_path_fix } from './path/fix.mjs';
export async function refactor_import_fix(args) {
    arguments_assert(arguments, [tautology]);
    let refactors = [
        refactor_import_unused,
        refactor_import_missing,
        refactor_import_path_fix
    ];
    console.log({args})
    await refactor_multiple(args, refactors);
    metadata([]);
}