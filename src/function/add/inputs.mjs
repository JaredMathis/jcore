import { function_add } from '../add.mjs';
import { string_identifier_multiple_parse } from '../../string/identifier/multiple/parse.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_add_inputs(function_name, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = string_identifier_multiple_parse(inputs_string);
    function_add();
}