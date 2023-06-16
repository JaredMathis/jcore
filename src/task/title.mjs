import { task_available } from './available.mjs';
import { task_property_set_local } from './property/set/local.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { git_hub_repository_issue_title } from '../git/hub/repository/issue/title.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_property_title } from './property/title.mjs';
export async function task_title(issue_number, title) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await git_hub_repository_issue_title(issue_number, title);
    const property_name = task_property_title();
    await task_property_set_local(issue_number, property_name, title);
    return await task_available();
}