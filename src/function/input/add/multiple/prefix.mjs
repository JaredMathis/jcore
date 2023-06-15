import { string_identifier_parts_from } from '../../../../string/identifier/parts/from.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_input_add_multiple_generic } from './generic.mjs';
export async function function_input_add_multiple_prefix(function_name, prefix, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await function_input_add_multiple_generic(function_name, mapped, map);
    return result;
    function map(i) {
        return string_identifier_parts_from(prefix, i);
    }
}