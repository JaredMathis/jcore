import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { refactor_input_add } from '../../../refactor/input/add.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { string_is } from '../../../string/is.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_add_type(function_name, input_name, input_value) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_is
    ]);
    await function_map_with_args(function_name_get(refactor_input_add), function_name, {
        input_name,
        input_value,
        input_type: arguments_assert_todo
    });
}