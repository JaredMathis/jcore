import { try_catch_throw } from '../try/catch/throw.mjs';
import { list_find_property_exists } from '../list/find/property/exists.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_add } from '../list/add.mjs';
import { task_map } from './map.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { git_hub_repository_issues_post } from '../git/hub/repository/issues/post.mjs';
import { assert } from '../assert.mjs';
import { task_property_title } from './property/title.mjs';
import { log } from '../log.mjs';
export async function task_later(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let data = await git_hub_repository_issues_post(title);
    let task = task_from_git_hub_issue(data);
    await task_map(function map(tasks_all) {
        const condition = !list_find_property_exists(tasks_all, task_property_title(), title);
        let message = `duplicate task title`;
        try_catch_throw(() => {
            assert(condition);
        }, () => {
            log(message);
        });
        list_add(tasks_all, task);
    });
    return task;
}