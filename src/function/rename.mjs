import { file_js_multiple_map } from '../file/js/multiple/map.mjs';
import { error } from '../error.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
import { file_js_all_identifier_rename } from '../file/js/all/identifier/rename.mjs';
import { function_rename_without_all_refactor } from './rename/without/all/refactor.mjs';
export async function function_rename(function_name_old, function_name_new) {
    await function_rename_without_all_refactor(function_name_old, function_name_new);
    let file_paths_changed = await file_js_all_identifier_rename(function_name_old, function_name_new);
    error();
    await file_js_multiple_map(refactor_import_fix.name, file_paths_changed);
}