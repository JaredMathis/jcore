import { refactor_input_swap_last_2 } from '../../../../refactor/input/swap/last/2.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_map_with_args } from '../../../map/with/args.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_swap_first_2(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await function_map_with_args(function_name_get(refactor_input_swap_last_2), function_name, {});
}