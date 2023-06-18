import { list_remove } from '../list/remove.mjs';
import { task_requires_generic } from './requires/generic.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_unrequires(task_number_string, task_number_required_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    let v = await task_requires_generic(task_number_string, task_number_required_string, requires_map);
    return v;
    function requires_map(requires, task_number_required) {
        list_remove(requires, task_number_required);
    }
}