import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { task_later_before } from '../before.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_later_before_current(task_number_string, title) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await task_later_before(task_number_string, title);
    return result;
}