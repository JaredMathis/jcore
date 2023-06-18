import { function_input_add_multiple } from '../input/add/multiple.mjs';
import { function_add } from '../add.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export async function function_add_inputs(function_name, inputs_string) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_add(function_name);
    await function_input_add_multiple(function_name, inputs_string);
}