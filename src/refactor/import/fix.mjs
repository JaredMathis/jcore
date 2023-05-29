import { refactor_import_missing } from './refactor_import_missing.mjs';
import { refactor_import_extra } from './refactor_import_extra.mjs';
import { refactor_import_path_fix } from './path/fix.mjs';
export function refactor_import_fix(args) {
    let {parsed, file_path} = args;
    let refactors = [
        refactor_import_extra,
        refactor_import_missing,
        refactor_import_path_fix
    ];
}