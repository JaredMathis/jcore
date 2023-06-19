import { not } from '../not.mjs';
import { list_find_property_exists } from '../list/find/property/exists.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_add } from '../list/add.mjs';
import { tasks_all_map } from '../tasks/all/map.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { git_hub_repository_issues_add } from '../git/hub/repository/issues/add.mjs';
import { task_property_title } from './property/title.mjs';
import { assert_message } from '../assert/message.mjs';
export async function task_later(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let data = await git_hub_repository_issues_add(title);
    let task = task_from_git_hub_issue(data);
    await tasks_all_map(function map(tasks_all) {
        let v_2 = task_property_title();
        let v = list_find_property_exists(tasks_all, v_2, title);
        const condition = not(v);
        let message = `duplicate task title`;
        assert_message(condition, message);
        list_add(tasks_all, task);
    });
    return task;
}