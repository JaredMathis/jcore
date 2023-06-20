import { refactor_call_expressions_replace } from '../../refactor/call/expressions/replace.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_name_get } from '../name/get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_call_replace(function_name, function_name_called_old, function_name_called_new) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = function_name_get(refactor_call_expressions_replace);
    await function_map_with_args(v, function_name, {
        function_name_called_old,
        function_name_called_new
    });
}