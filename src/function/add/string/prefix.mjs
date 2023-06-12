import { string_identifier_with_prefix } from '../../../string/identifier/with/prefix.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_add_string } from '../string.mjs';
export function function_add_string_prefix(prefix, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name = string_identifier_with_prefix(prefix, value);
    function_add_string(function_name, value);
}