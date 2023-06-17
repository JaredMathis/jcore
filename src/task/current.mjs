import { result_data_set } from '../result/data/set.mjs';
import { result_empty } from '../result/empty.mjs';
import { task_get } from './get.mjs';
import { task_number_unhash } from './number/unhash.mjs';
import { equal } from '../equal.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_current() {
    arguments_assert(arguments, []);
    let result = result_empty();
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    if (equal(task_number_hashed, null)) {
        return 'no current task';
    }
    let task_number_string = task_number_unhash(task_number_hashed);
    let data = await task_get(task_number_string);
    return result_data_set(result, data);
    metadata([]);
}