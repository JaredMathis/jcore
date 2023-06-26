import { refactor_input_swap } from '../../refactor/input/swap.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_input_swap(function_name, index_from, index_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = function_name_get(refactor_input_swap);
    let v_2 = {
        index_from,
        index_to
    };
    await function_map_with_args(v, function_name, v_2);
}