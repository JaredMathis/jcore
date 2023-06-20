import { task_available_first } from './available/first.mjs';
import { task_unsub_generic } from './unsub/generic.mjs';
import { result_property_success_get } from '../result/property/success/get.mjs';
import { result_property_data_get } from '../result/property/data/get.mjs';
import { task_set } from './set.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_current } from './current.mjs';
import { assert } from '../assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let v_4 = await task_unsub_generic(on_empty, on_empty_not);
    return v_4;
    async function on_empty_not(last_string) {
        await task_finish();
        await task_set(last_string);
        let current_result = await task_current();
        let v_2 = result_property_success_get(current_result);
        assert(v_2);
        let current = result_property_data_get(current_result);
        return current;
    }
    async function on_empty() {
        let available = await task_available_first();
        task_set(available);
    }
}