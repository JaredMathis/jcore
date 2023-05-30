import { data_get } from '../get.mjs';
import { log } from '../../log.mjs';
import { data_task_id_remove } from './id/remove.mjs';
import { data_task_id_get } from './id/get.mjs';
import { todo } from '../../todo.mjs';
import { file_js_all_map } from '../../file/js/all/map.mjs';
import { refactor_import_fix } from '../../refactor/import/fix.mjs';
import { git_pacp_with_message } from '../../git/pacp/with/message.mjs';
import { assert } from '../../assert.mjs';
export async function data_task_finish() {
    todo(`Validate the task id is valid i.e. #123 not asdf`);
    let task_id = await data_task_id_get();
    await file_js_all_map(refactor_import_fix.name);
    let result = await git_pacp_with_message(`closes ${ task_id }`);
    assert(result.success);
    console.log(await data_get());
    await data_task_id_remove();
    console.log(await data_get());
}