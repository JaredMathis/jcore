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
import { object_merge } from '../object/merge.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let result = result_empty();
    let required_bys = await task_current_required_bys();
    if (list_length_is_0(required_bys)) {
        let data = await task_finish();
        object_merge({ data }, result);
        return result;
    }
    let last = await list_last(required_bys);
    await task_finish();
    let last_string = string_to(last);
    await task_set(last_string);
    let data = await task_current();
    return result_data_set(data, result);
}