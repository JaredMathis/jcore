import { string_identifier_with_prefix } from '../../../string/identifier/with/prefix.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_add_string } from '../string.mjs';
export async function function_add_string_prefix(prefix, suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name = string_identifier_with_prefix(prefix, suffix);
    await function_add_string(function_name, suffix);
}