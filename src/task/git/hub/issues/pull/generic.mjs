import { metadata } from '../../../../../metadata.mjs';
import { integer_value_1 } from '../../../../../integer/value/1.mjs';
import { list_multiple_combine } from '../../../../../list/multiple/combine.mjs';
import { equal } from '../../../../../equal.mjs';
import { add_1 } from '../../../../../add/1.mjs';
import { list_adder_async } from '../../../../../list/adder/async.mjs';
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
export async function task_git_hub_issues_pull_generic(no_cache, tasks_all_path) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = async function v(list_add_then) {
        let page = integer_value_1();
        let test;
        let issues;
        do {
            issues = await git_hub_repository_issues_all(no_cache, page);
            list_add_then(issues);
            page = add_1(page);
            let v_3 = list_length(issues);
            let v_4 = git_hub_page_size();
            test = equal(v_3, v_4);
        } while (test);
    };
    let pages = await list_adder_async(v_2);
    let issues_combined = list_multiple_combine(pages);
    let mapped = list_map(issues_combined, task_from_git_hub_issue);
    let tasks_all_path = version_path_tasks_all_get(version_repository_default());
    await file_json_overwrite(tasks_all_path, mapped);
    return mapped;
    metadata([]);
}