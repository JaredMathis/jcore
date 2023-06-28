import { function_is } from '../../function/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export async function if_else_async(if_check, on_if, on_else) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is,
        function_is
    ]);
    if (if_check) {
        let v = await on_if();
        return v;
    } else {
        let v_2 = await on_else();
        return v_2;
    }
    metadata([]);
}