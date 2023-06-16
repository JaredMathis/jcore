import { list_multiple_combine } from '../../../../../list/multiple/combine.mjs';
import { equal } from '../../../../../equal.mjs';
import { add_1 } from '../../../../../add/1.mjs';
import { list_new_then_async } from '../../../../../list/new/then/async.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { file_json_overwrite } from '../../../../../file/json/overwrite.mjs';
import { version_path_tasks_all_get } from '../../../../../version/path/tasks/all/get.mjs';
import { task_from_git_hub_issue } from '../../../../from/git/hub/issue.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { git_hub_page_size } from '../../../../../git/hub/page/size.mjs';
import { list_length } from '../../../../../list/length.mjs';
import { git_hub_repository_issues_all } from '../../../../../git/hub/repository/issues/all.mjs';
import { version_repository_default } from '../../../../../version/repository/default.mjs';
export async function task_git_hub_issues_pull_generic(no_cache) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_name = version_repository_default();
    let pages = await list_new_then_async(async list_add_then => {
        let page = 1;
        let issues;
        do {
            issues = await git_hub_repository_issues_all(no_cache, page);
            list_add_then(issues);
            page = add_1(page);
        } while (equal(list_length(issues), git_hub_page_size()));
    });
    let issues_combined = list_multiple_combine(pages);
    let mapped = list_map(issues_combined, task_from_git_hub_issue);
    let tasks_all_path = version_path_tasks_all_get(repository_name);
    await file_json_overwrite(tasks_all_path, mapped);
    return mapped;
}