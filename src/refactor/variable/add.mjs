import { metadata } from '../../metadata.mjs';
import { refactor_variable_add_generic } from './add/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export async function refactor_variable_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let after_let_identifier = ``;
    await refactor_variable_add_generic(args, after_let_identifier);
    metadata([]);
}