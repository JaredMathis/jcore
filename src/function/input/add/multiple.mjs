import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_input_add } from '../add.mjs';
import { string_identifier_multiple_parse } from '../../../string/identifier/multiple/parse.mjs';
export async function function_input_add_multiple(function_name, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = string_identifier_multiple_parse(inputs_string);
    for (let i of inputs) {
        await function_input_add(function_name, i);
    }
}