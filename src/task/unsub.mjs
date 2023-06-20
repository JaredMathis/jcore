import { task_unsub_generic } from './unsub/generic.mjs';
import { result_property_success_get } from '../result/property/success/get.mjs';
import { result_property_data_get } from '../result/property/data/get.mjs';
import { result_unsuccess } from '../result/unsuccess.mjs';
import { result_property_data_set } from '../result/property/data/set.mjs';
import { result_empty } from '../result/empty.mjs';
import { task_set } from './set.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_current } from './current.mjs';
import { assert } from '../assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let r = result_empty();
    let v_4 = await task_unsub_generic(on_empty, on_else);
    return v_4;
    async function on_else(last_string) {
        await task_finish();
        await task_set(last_string);
        let current_result = await task_current();
        let v_2 = result_property_success_get(current_result);
        assert(v_2);
        let current = result_property_data_get(current_result);
        let v_3 = result_property_data_set(r, current);
        return v_3;
    }
    async function on_empty() {
        result_unsuccess(r);
        let data = await task_finish();
        let v = result_property_data_set(r, data);
        return v;
    }
}