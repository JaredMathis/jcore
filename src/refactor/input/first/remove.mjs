import { refactor_input_generic_simple } from '../generic/simple.mjs';
import { list_last_remove } from '../../../list/last/remove.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_input_first_remove(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_last_remove;
    await refactor_input_generic_simple(args, lambda);
}