import { refactor_functions_to_files } from '../refactor/functions/to/files.mjs';
import { function_exists } from './exists.mjs';
import { function_add } from './add.mjs';
import { function_map } from './map.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
export async function function_auto(function_name) {
    if (!await function_exists(function_name)) {
        await function_add(function_name);
    }
    let mappers = [
        refactor_import_fix,
        refactor_functions_to_files
    ];
    for (let m of mappers) {
        await function_map(m.name, function_name);
    }
    await function_open_vs_code(function_name);
}