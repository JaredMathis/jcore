import { list_last_string_to } from '../../list/last/string/to.mjs';
import { if_else_async } from '../../if/else/async.mjs';
import { list_empty } from '../../list/empty.mjs';
import { task_current_required_bys } from '../current/required/bys.mjs';
export async function task_unsub_generic(on_empty, on_else) {
    let required_bys = await task_current_required_bys();
    const if_check = list_empty(required_bys);
    let v = await if_else_async(if_check, on_empty, async function v_3() {
        let last_string = list_last_string_to(required_bys);
        let v_2 = await on_else(last_string);
        return v_2;
    });
    return v;
}