import { list_find_property } from '../list/find/property.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_add } from '../list/add.mjs';
import { task_map } from './map.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { git_hub_repository_issues_post } from '../git/hub/repository/issues/post.mjs';
import { assert } from '../assert.mjs';
export async function task_later(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let data = await git_hub_repository_issues_post(title);
    let task = task_from_git_hub_issue(data);
    await task_map(function map(tasks_all) {
        assert(list_find_property());
        list_add(tasks_all, task);
    });
    return task;
}