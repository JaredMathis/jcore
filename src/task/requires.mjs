import { task_requires_generic } from './requires/generic.mjs';
import { list_add_assert_exists_not } from '../list/add/assert/exists/not.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_requires(task_number_string, task_number_required_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    let v = await task_requires_generic(task_number_string, task_number_required_string, requires_map);
    return v;
    function requires_map(requires, task_number_required) {
        list_add_assert_exists_not(requires, task_number_required);
    }
}