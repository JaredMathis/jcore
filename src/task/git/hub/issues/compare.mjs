import { version_path_tasks_all_get } from '../../../../version/path/tasks/all/get.mjs';
import { version_repository_default } from '../../../../version/repository/default.mjs';
import { version_path_tasks_all_2_get } from '../../../../version/path/tasks/all/2/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { file_json_read } from '../../../../file/json/read.mjs';
import { log } from '../../../../log.mjs';
export async function task_git_hub_issues_compare() {
    arguments_assert(arguments, []);
    let all_2_path = version_path_tasks_all_2_get(version_repository_default());
    let all_path = version_path_tasks_all_get(version_repository_default());
    let all = await file_json_read(all_path);
    let all_2 = await file_json_read(all_2_path);
    for (let a of all) {
        log(a);
    }
}