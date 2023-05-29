import { data_task_id_set } from './id/set.mjs';
import { file_js_all_map } from '../../file/js/all/map.mjs';
import { refactor_import_path_fix } from '../../refactor/import/path/fix.mjs';
export async function data_task_finish() {
    todo(`Validate the task id is valid i.e. #123 not asdf`);
    data_git_commit_message_set(`closes ${}`);
    await file_js_all_map(refactor_import_path_fix.name);
    await data_task_id_set('no task');
}