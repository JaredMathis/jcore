import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_input_add_caller(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, function_declaration} = args;
    error('todo: refactor_input_add_caller');
}