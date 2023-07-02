import { list_sort } from '../../../../list/sort.mjs';
import { list_find_property } from '../../../../list/find/property.mjs';
import { version_path_tasks_all_get } from '../../../../version/path/tasks/all/get.mjs';
import { version_repository_default } from '../../../../version/repository/default.mjs';
import { version_path_tasks_all_2_get } from '../../../../version/path/tasks/all/2/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { file_json_read } from '../../../../file/json/read.mjs';
import { log } from '../../../../log.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { list_map_property } from '../../../../list/map/property.mjs';
import { list_length } from '../../../../list/length.mjs';
export async function task_git_hub_issues_compare() {
    arguments_assert(arguments, []);
    let all_2_path = version_path_tasks_all_2_get(version_repository_default());
    let all_path = version_path_tasks_all_get(version_repository_default());
    let all = await file_json_read(all_path);
    let all_2 = await file_json_read(all_2_path);
    const number = 'number';
    let all_2_numbers = list_map_property(all_2, number);
    list_sort(all_2_numbers);
    log({ a: list_length(all_2) });
    for (let a of all) {
        const number_value = object_property_get(a, number);
        log({ number_value });
        let a_2 = list_find_property(all_2, number, number_value);
        log({
            a_2,
            a
        });
    }
}