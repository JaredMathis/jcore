import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { task_property_closed } from '../property/closed.mjs';
export async function task_close_generic(lambda, task_number_string) {
    arguments_assert(arguments, [
        function_is,
        arguments_assert_todo
    ]);
    const property_value = task_property_closed();
    let v = await lambda(task_number_string, property_value);
    return v;
    metadata([]);
}