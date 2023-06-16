import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_body } from '../body.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_body_description(issue_number, body) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await task_body(issue_number, body);
    return result;
}