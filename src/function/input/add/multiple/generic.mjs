import { list_map } from '../../../../list/map.mjs';
import { string_identifier_multiple_parse } from '../../../../string/identifier/multiple/parse.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_input_add } from '../../add.mjs';
export async function function_input_add_multiple_generic(function_name, inputs_string, mapper) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = string_identifier_multiple_parse(inputs_string);
    let mapped = list_map(inputs, mapper);
    for (let m of mapped) {
        await function_input_add(function_name, m);
    }
}