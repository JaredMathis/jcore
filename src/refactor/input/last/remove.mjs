import { refactor_input_generic_simple } from '../generic/simple.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove } from '../../../list/remove.mjs';
export async function refactor_input_last_remove(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_remove;
    await refactor_input_generic_simple(args, lambda);
}