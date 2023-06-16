import { list_swap_first_2 } from '../../../../list/swap/first/2.mjs';
import { refactor_input_generic_simple } from '../../generic/simple.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_input_swap_first_2(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_swap_first_2;
    await refactor_input_generic_simple(args, lambda);
}