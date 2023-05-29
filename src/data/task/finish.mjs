import { data_git_commit_message_initial } from '../git/commit/message/initial.mjs';
import { data_task_id_get } from './id/get.mjs';
import { todo } from '../../todo.mjs';
import { data_task_id_set } from './id/set.mjs';
import { file_js_all_map } from '../../file/js/all/map.mjs';
import { refactor_import_path_fix } from '../../refactor/import/path/fix.mjs';
import { data_git_commit_message_set } from '../git/commit/message/set.mjs';
import { assert } from '../../assert.mjs';
import { git_acp_with_message } from '../../git/acp/with/message.mjs';
export async function data_task_finish() {
    todo(`Validate the task id is valid i.e. #123 not asdf`);
    const task_id_none = 'no task';
    let task_id = await data_task_id_get();
    assert(task_id !== task_id_none);
    await data_git_commit_message_set();
    await file_js_all_map(refactor_import_path_fix.name);
    await git_acp_with_message(`closes ${ task_id }`);
    await data_git_commit_message_set(initial);
    await data_task_id_set(task_id_none);
}