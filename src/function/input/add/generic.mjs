import { integer_is } from '../../../integer/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { refactor_input_add } from '../../../refactor/input/add.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
export async function function_input_add_generic(function_name, input_name, input_type, input_value_default, input_index) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        integer_is
    ]);
    let v = function_name_get(refactor_input_add);
    await function_map_with_args(v, function_name, {
        input_name,
        input_value_default,
        input_type,
        input_index
    });
}