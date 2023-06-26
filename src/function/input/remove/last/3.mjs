import { integer_value_3 } from '../../../../integer/value/3.mjs';
import { function_input_remove_last } from '../last.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { function_input_last_remove } from '../remove.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { range } from '../../../../range.mjs';
export async function function_input_remove_last_3(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = integer_value_3();
    for (let i of range(v)) {
        await function_input_remove_last(function_name);
    }
}