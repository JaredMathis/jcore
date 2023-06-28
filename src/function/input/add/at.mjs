import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_input_add_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_input_value_default } from '../value/default.mjs';
export async function function_input_add_at(function_name, input_name, input_index) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let input_value_default = function_input_value_default();
    let v = function_name_get(arguments_assert_todo);
    await function_input_add_generic(function_name, input_name, v, input_value_default, input_index);
    metadata([]);
}