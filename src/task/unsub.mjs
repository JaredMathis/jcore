import { task_set } from './set.mjs';
import { task_current_required_bys } from './current/required/bys.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_last } from '../list/last.mjs';
import { task_current } from './current.mjs';
import { string_to } from '../string/to.mjs';
import { list_length_is_0 } from '../list/length/is/0.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let required_bys = await task_current_required_bys();
    if (list_length_is_0(required_bys)) {
        
    }
    let last = await list_last(required_bys);
    await task_finish();
    let last_string = string_to(last);
    await task_set(last_string);
    return await task_current();
}