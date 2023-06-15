import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { task_id_remove } from './id/remove.mjs';
import { task_id_get } from './id/get.mjs';
import { todo } from '../todo.mjs';
import { file_js_all_map } from '../file/js/all/map.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
import { git_pacp_with_message } from '../git/pacp/with/message.mjs';
import { assert } from '../assert.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    todo(`Validate the task id is valid i.e. #123 not asdf`);
    let task_id_hashed = await task_id_get();

    let result = await git_pacp_with_message(`closes ${ task_id_hashed }`);
    assert(result.success);
    await task_id_remove();
    metadata([]);
}