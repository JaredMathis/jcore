import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function task_before() {
    arguments_assert(arguments, []);
    error('todo: task_before');
}