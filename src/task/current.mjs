import { result_property_data_set } from '../result/property/data/set.mjs';
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
    let v_3 = null;
    let v_2 = equal(task_number_hashed, v_3);
    if (v_2) {
        return 'no current task';
    }
    let task_number_string = task_number_unhash(task_number_hashed);
    let data = await task_get(task_number_string);
    let v = result_property_data_set(result, data);
    return v;
    metadata([]);
}