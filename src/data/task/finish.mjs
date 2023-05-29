import { file_js_all_map } from '../../file/js/all/map.mjs';
import { refactor_import_path_fix } from '../../refactor/import/path/fix.mjs';
export async function data_task_finish() {
    await file_js_all_map(refactor_import_path_fix.name);
}