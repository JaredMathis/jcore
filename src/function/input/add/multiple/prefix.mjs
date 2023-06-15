import { string_identifier_parts_from } from '../../../../string/identifier/parts/from.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_input_add_multiple_generic } from './generic.mjs';
import { list_map } from '../../../../list/map.mjs';
import { string_identifier_multiple_parse } from '../../../../string/identifier/multiple/parse.mjs';
export async function function_input_add_multiple_prefix(function_name, prefix, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = string_identifier_multiple_parse(inputs_string);
    let mapped = list_map(inputs, string_identifier_parts_from);
    let result = await function_input_add_multiple_generic(function_name, inputs);
    return result;
}