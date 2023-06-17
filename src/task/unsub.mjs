import { result_property_success } from '../result/property/success.mjs';
import { result_data_get } from '../result/data/get.mjs';
import { result_unsuccess } from '../result/unsuccess.mjs';
import { result_data_set } from '../result/data/set.mjs';
import { result_empty } from '../result/empty.mjs';
import { task_set } from './set.mjs';
import { task_current_required_bys } from './current/required/bys.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_last } from '../list/last.mjs';
import { task_current } from './current.mjs';
import { string_to } from '../string/to.mjs';
import { list_length_is_0 } from '../list/length/is/0.mjs';
import { assert } from '../assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let result = result_empty();
    let required_bys = await task_current_required_bys();
    if (list_length_is_0(required_bys)) {
        result_unsuccess(result);
        let data = await task_finish();
        return result_data_set(result, data);
    }
    let last = await list_last(required_bys);
    await task_finish();
    let last_string = string_to(last);
    await task_set(last_string);
    let current_result = await task_current();
    assert(result_property_success(current_result));
    let current = result_data_get(current_result);
    return result_data_set(result, current);
}