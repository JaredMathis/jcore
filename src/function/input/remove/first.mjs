import { refactor_input_first_remove } from '../../../refactor/input/first/remove.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_remove_first(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await function_map_with_args(function_name_get(refactor_input_first_remove), function_name, {});
}