import { identity } from '../../../identity.mjs';
import { function_input_add_multiple_generic } from './multiple/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_add_multiple(function_name, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await function_input_add_multiple_generic(function_name, inputs_string, identity);
}