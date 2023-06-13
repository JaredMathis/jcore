import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function refactor_call_replace(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name_called_old, function_name_called_new} = args;
    error('todo: refactor_call_replace');
}