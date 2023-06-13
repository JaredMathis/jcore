import { refactor_input_add } from '../../refactor/input/add.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_name_get } from '../name/get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_call_replace(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await function_map_with_args(function_name_get(refactor_input_add), function_name, {
        input_name,
        input_value_default,
        input_type
    });
}