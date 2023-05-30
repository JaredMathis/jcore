import { function_map } from '../map.mjs';
import { refactor_functions_to_files } from '../../refactor/functions/to/files.mjs';
import { refactor_import_fix } from '../../refactor/import/fix.mjs';
export async function function_auto_after(function_name) {
    let mappers = [
        refactor_import_fix,
        refactor_functions_to_files
    ];
    for (let m of mappers) {
        await function_map(m.name, function_name);
    }
}