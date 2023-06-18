import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { function_input_swap_first_to } from '../to.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_input_swap_first_to_named(function_name, index_string) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    let result = await function_input_swap_first_to(function_name, index_string);
    return result;
}