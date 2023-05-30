import { refactor_import_missing } from './missing.mjs';
import { refactor_import_unused } from './unused.mjs';
import { refactor_import_path_fix } from './path/fix.mjs';
export async function refactor_import_fix(args) {
    let refactors = [
        refactor_import_unused,
        refactor_import_missing,
        refactor_import_path_fix
    ];
    await refactor_multiple(args,refactors);
}

async function refactor_multiple(args,refactors) {
    for (let r of refactors) {
        await r(args);
    }
}
