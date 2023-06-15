import { list_add } from '../list/add.mjs';
import { task_map } from './map.mjs';
import { task_from_git_hub_issue } from './from/git/hub/issue.mjs';
import { git_hub_repository_issues_post } from '../git/hub/repository/issues/post.mjs';
export async function task_later(title) {
    let data = await git_hub_repository_issues_post(title);
    let task = task_from_git_hub_issue(data);
    await task_map(function map(tasks_all) {
        list_add(tasks_all, task);
    });
    return task;
}