import { refactor_input_swap_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { range } from '../../../../range.mjs';
import { list_length } from '../../../../list/length.mjs';
export function refactor_input_swap_last_to(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index} = args;
    for (let i of range(0, list_length()));
    refactor_input_swap_generic();
}