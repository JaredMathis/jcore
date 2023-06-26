import { equal } from '../../../../equal.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_to } from '../../../../string/to.mjs';
import { list_find_index } from '../../../../list/find/index.mjs';
import { function_inputs } from '../../../inputs.mjs';
export async function function_inputs_index_of_string(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = await function_inputs(function_name);
    let v_3 = function v(i) {
        let v_2 = equal(i, input_name);
        return v_2;
    };
    let index = list_find_index(inputs, v_3);
    let index_string = string_to(index);
    return index_string;
}