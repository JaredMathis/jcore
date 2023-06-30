import { result_property_data_get } from '../../result/property/data/get.mjs';
import { assert } from '../../assert.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { task_current } from '../current.mjs';
export async function task_current_data() {
    let current_result = await task_current();
    let v_2 = result_property_success_get(current_result);
    assert(v_2);
    let current = result_property_data_get(current_result);
    return current;
}