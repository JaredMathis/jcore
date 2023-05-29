import { function_map } from './map.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
export async function function_auto(function_name) {
    await function_map(refactor_import_fix.name, function_name);
}