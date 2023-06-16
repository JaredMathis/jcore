import { file_json_overwrite } from '../../../../../file/json/overwrite.mjs';
import { version_path_tasks_all_get } from '../../../../../version/path/tasks/all/get.mjs';
import { task_from_git_hub_issue } from '../../../../from/git/hub/issue.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { git_hub_page_size } from '../../../../../git/hub/page/size.mjs';
import { list_length } from '../../../../../list/length.mjs';
import { assert } from '../../../../../assert.mjs';
import { comment } from '../../../../../comment.mjs';
import { git_hub_repository_issues_all } from '../../../../../git/hub/repository/issues/all.mjs';
import { version_repository_default } from '../../../../../version/repository/default.mjs';
export async function task_git_hub_issues_pull_generic(no_cache) {
    let repository_name = version_repository_default();
    let issues = await git_hub_repository_issues_all(no_cache);
    comment(`If there's more than 1 page of issues code needs adjusting`);
    assert(list_length(issues) <= git_hub_page_size());
    let mapped = list_map(issues, task_from_git_hub_issue);
    let tasks_all_path = version_path_tasks_all_get(repository_name);
    await file_json_overwrite(tasks_all_path, mapped);
    return mapped;
}