import { function_map } from '../map.mjs';
import { refactor_functions_to_files } from '../../refactor/functions/to/files.mjs';
import { refactor_import_fix } from '../../refactor/import/fix.mjs';
export async function function_auto_after(function_name) {
    let refactors = [
        refactor_import_fix,
        refactor_functions_to_files
    ];
    for (let r of refactors) {
        await function_map(r.name, function_name);
    }
}