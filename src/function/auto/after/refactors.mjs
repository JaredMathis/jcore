import { refactor_functions_to_files } from '../../../refactor/functions/to/files.mjs';
import { refactor_import_fix } from '../../../refactor/import/fix.mjs';
export function function_auto_after_refactors() {
    return [
        refactor_import_fix,
        refactor_functions_to_files
    ];
}