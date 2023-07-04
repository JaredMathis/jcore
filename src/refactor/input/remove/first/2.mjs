import { refactor_input_remove_first } from '../first.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_input_remove_first_2(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await refactor_input_remove_first(args);
    await refactor_input_remove_first(args);
}