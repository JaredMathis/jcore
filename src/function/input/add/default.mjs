import { function_input_add_generic } from './generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_name_get } from '../../name/get.mjs';
export async function function_input_add_default(function_name, input_name, input_value_default) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_is
    ]);
    let v = function_name_get(arguments_assert_todo);
    await function_input_add_generic(function_name, input_name, v, input_value_default, 0);
}