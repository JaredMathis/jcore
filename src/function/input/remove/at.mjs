import { function_map_with_args } from '../../map/with/args.mjs';
import { refactor_input_remove_first } from '../../../refactor/input/remove/first.mjs';
import { function_name_get } from '../../name/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_remove_at(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = function_name_get(refactor_input_remove_first);
    await function_map_with_args(v, function_name, {});
}