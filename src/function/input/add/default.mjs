import { refactor_input_add } from '../../../refactor/input/add.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_map_with_args } from '../../map/with/args.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
export async function function_input_add_default(function_name, input_name, input_value_default) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_is
    ]);
    let input_value_default = js_code_call_expression()
    await function_map_with_args(function_name_get(refactor_input_add), function_name, {
        input_name,
        input_value_default: input_value_default,
        input_type: arguments_assert_todo
    });
}