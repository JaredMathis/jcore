import { refactor_input_generic_simple } from '../../generic/simple.mjs';
import { list_first_remove } from '../../../../list/first/remove.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_input_first_remove_at(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_first_remove;
    await refactor_input_generic_simple(args, lambda);
}