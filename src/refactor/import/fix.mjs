import { refactor_import_missing } from './missing.mjs';
import { refactor_import_extra } from './extra.mjs';
import { refactor_import_path_fix } from './path/fix.mjs';
export async function refactor_import_fix(args) {
    let refactors = [
        refactor_import_extra,
        refactor_import_missing,
        refactor_import_path_fix
    ];
    for (let r of refactors) {
        await r(args);
    }
}