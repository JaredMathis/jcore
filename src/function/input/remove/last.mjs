import { refactor_input_last_remove } from '../../../refactor/input/last/remove.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_remove_last(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = function_name_get(refactor_input_last_remove);
    await function_map_with_args(v, function_name, {});
}