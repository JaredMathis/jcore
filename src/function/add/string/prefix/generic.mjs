import { boolean_is } from '../../../../boolean/is.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_add_string } from '../../string.mjs';
import { string_identifier_combine } from '../../../../string/identifier/combine.mjs';
export async function function_add_string_prefix_generic(prefix, suffix, value, assert_not_exists) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        boolean_is
    ]);
    let function_name = string_identifier_combine(prefix, suffix);
    if (!assert_not_exists) {

    }
    await function_add_string(function_name, value);
    return function_name;
}