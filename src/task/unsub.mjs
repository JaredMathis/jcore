import { list_last_string_to } from '../list/last/string/to.mjs';
import { if_else_async } from '../if/else/async.mjs';
import { result_property_success_get } from '../result/property/success/get.mjs';
import { result_property_data_get } from '../result/property/data/get.mjs';
import { result_unsuccess } from '../result/unsuccess.mjs';
import { result_property_data_set } from '../result/property/data/set.mjs';
import { result_empty } from '../result/empty.mjs';
import { task_set } from './set.mjs';
import { task_current_required_bys } from './current/required/bys.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_current } from './current.mjs';
import { list_empty } from '../list/empty.mjs';
import { assert } from '../assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let result;
    let r = result_empty();
    let required_bys = await task_current_required_bys();
    const if_check = list_empty(required_bys);
    await if_else_async(if_check, on_if, () => {
        let last_string = list_last_string_to(required_bys);
        await on_else(last_string);
    });
    return result;
    async function on_else(last_string) {
        await task_finish();
        await task_set(last_string);
        let current_result = await task_current();
        let v_2 = result_property_success_get(current_result);
        assert(v_2);
        let current = result_property_data_get(current_result);
        let v_3 = result_property_data_set(r, current);
        result = v;
    }
    async function on_if() {
        result_unsuccess(r);
        let data = await task_finish();
        let v = result_property_data_set(r, data);
        result = v;
    }
}