import { metadata } from '../../../metadata.mjs';
import { refactor_input_generic_simple } from '../generic/simple.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove_last } from '../../../list/remove/last.mjs';
export async function refactor_input_last_remove(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_remove_last;
    await refactor_input_generic_simple(args, lambda);
    metadata([]);
}