import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_later } from '../later.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_requires } from '../requires.mjs';
export async function task_later_before(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await task_later(title);
    task_requires()
    return result;
}