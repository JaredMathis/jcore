import { function_input_add_at } from './add/at.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_last_index } from '../../list/last/index.mjs';
export async function function_input_add(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = await function_intpus(function_name);
    const input_index = list_last_index(inputs);
    await function_input_add_at(function_name, input_name, input_index);
}