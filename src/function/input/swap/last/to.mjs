import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { refactor_input_swap_last_to } from '../../../../refactor/input/swap/last/to.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_map_with_args } from '../../../map/with/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_swap_last_to(function_name, index) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    await function_map_with_args(function_name_get(refactor_input_swap_last_to), function_name, {index});
}