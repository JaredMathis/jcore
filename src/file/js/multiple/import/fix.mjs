import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { file_js_multiple_map } from '../map.mjs';
export async function file_js_multiple_import_fix(file_paths_changed) {
    await file_js_multiple_map(function_name_get(refactor_import_fix), file_paths_changed);
}