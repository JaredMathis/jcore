import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { git_hub_repository_issue_title } from '../git/hub/repository/issue/title.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_title(issue_number, title) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await git_hub_repository_issue_title(issue_number, title);
    return result;
}