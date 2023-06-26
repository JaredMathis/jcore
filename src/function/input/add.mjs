import { metadata } from '../../metadata.mjs';
import { function_input_add_generic_default_index } from './add/generic/default/index.mjs';
import { function_input_add_at } from './add/at.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_input_add(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const input_index = await function_input_add_generic_default_index(function_name);
    await function_input_add_at(function_name, input_name, input_index);
    metadata([]);
}