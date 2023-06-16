import { visit_lambda_none } from '../../../visit/lambda/none.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../unsummarized.mjs';
import { task_requires_get } from '../../requires/get.mjs';
export async function task_all_require_cycles() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    visit_lambda_none(t, task => task_requires_get(task));
}