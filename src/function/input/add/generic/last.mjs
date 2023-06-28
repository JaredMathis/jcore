import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_input_add_generic } from '../generic.mjs';
import { function_input_add_generic_default_index } from './default/index.mjs';
export async function function_input_add_generic_last(function_name, input_name, input_type, input_value_default) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const input_index = await function_input_add_generic_default_index(function_name);
    await function_input_add_generic(function_name, input_name, input_type, input_value_default, input_index);
    metadata([]);
}