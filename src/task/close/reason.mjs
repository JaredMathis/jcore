import { task_title_append } from '../title/append.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_close } from '../close.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_combine } from '../../string/combine.mjs';
export async function task_close_reason(task_number_string, reason) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await task_close(task_number_string);
    let v = string_combine(': ', reason);
    await task_title_append(task_number_string, v);
    return result;
    metadata([]);
}