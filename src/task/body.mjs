import { metadata } from '../metadata.mjs';
import { task_property_body } from './property/body.mjs';
import { task_property_change_local } from './property/change/local.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { git_hub_repository_issue_body } from '../git/hub/repository/issue/body.mjs';
export async function task_body(issue_number, body) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await git_hub_repository_issue_body(issue_number, body);
    const property_name = task_property_body();
    await task_property_change_local(issue_number, property_name, body);
    return result;
    metadata([]);
}