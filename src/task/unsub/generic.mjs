import { function_is } from '../../function/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_last_string_to } from '../../list/last/string/to.mjs';
import { if_else_async } from '../../if/else/async.mjs';
import { list_empty } from '../../list/empty.mjs';
import { task_current_required_bys } from '../current/required/bys.mjs';
export async function task_unsub_generic(on_empty, on_empty_not) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let required_bys = await task_current_required_bys();
    const if_check = list_empty(required_bys);
    let v_4 = async function v_3() {
        let last_string = list_last_string_to(required_bys);
        let v_2 = await on_empty_not(last_string);
        return v_2;
    };
    let v = await if_else_async(if_check, on_empty, v_4);
    return v;
    metadata([]);
}