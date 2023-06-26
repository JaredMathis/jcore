import { metadata } from '../../metadata.mjs';
import { result_property_data_get } from '../../result/property/data/get.mjs';
import { assert } from '../../assert.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { task_set } from '../set.mjs';
import { task_number_get_string } from '../number/get/string.mjs';
import { task_unrequires } from '../unrequires.mjs';
import { task_unsub_preview } from '../unsub/preview.mjs';
import { task_current } from '../current.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_sub_undo() {
    arguments_assert(arguments, []);
    let current_result = await task_current();
    let v_2 = result_property_success_get(current_result);
    assert(v_2);
    let current = result_property_data_get(current_result);
    let previous = await task_unsub_preview();
    const current_number = task_number_get_string(current);
    const previous_number = task_number_get_string(previous);
    await task_unrequires(previous_number, current_number);
    await task_set(previous_number);
    metadata([]);
}