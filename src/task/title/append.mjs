import { task_title_get } from './get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_title } from '../title.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_add } from '../../string/add.mjs';
export async function task_title_append(issue_number, title_additional) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let title_before = task_title_get(issue_number);
    let title_after = string_add(title_before, title_additional);
    let result = await task_title(issue_number, title_after);
    return result;
}