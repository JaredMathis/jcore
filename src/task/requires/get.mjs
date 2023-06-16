import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function task_requires_get(task) {
    arguments_assert(arguments, [arguments_assert_todo]);
    error('todo: task_requires_get');
}