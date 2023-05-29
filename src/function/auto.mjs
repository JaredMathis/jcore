import { file_open_vs_code } from '../file/open/vs/code.mjs';
import { function_name_to_path } from './name/to/path.mjs';
import { function_exists } from './exists.mjs';
import { function_add } from './add.mjs';
import { function_map } from './map.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
export async function function_auto(function_name) {
    if (!await function_exists(function_name)) {
        await function_add(function_name);
    }
    await function_map(refactor_import_fix.name, function_name);
    await function_open_vs_code(function_name);
}

async function function_open_vs_code(function_name) {
    let function_path = function_name_to_path(function_name);
    await file_open_vs_code(function_path);
}
