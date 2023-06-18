import { result_unsuccess } from '../../result/unsuccess.mjs';
import { result_property_data_set } from '../../result/property/data/set.mjs';
import { result_property_data_get } from '../../result/property/data/get.mjs';
import { assert } from '../../assert.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { task_current } from '../current.mjs';
import { task_set } from '../set.mjs';
import { task_finish } from '../finish.mjs';
import { task_unsub_generic } from './generic.mjs';
import { result_empty } from '../../result/empty.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_unsub_preview() {
    arguments_assert(arguments, []);
    let r = result_empty();
    return await task_unsub_generic(on_if, on_else);
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
    async function on_if() {
        result_unsuccess(r);
        let data = await task_finish();
        let v = result_property_data_set(r, data);
        return v;
    }
}