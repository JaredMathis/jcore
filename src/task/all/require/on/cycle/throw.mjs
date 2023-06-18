import { visit_lambda_none } from '../../../../../visit/lambda/none.mjs';
import { list_map_property } from '../../../../../list/map/property.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../../../unsummarized.mjs';
import { task_requires_get } from '../../../../requires/get.mjs';
import { task_property_number } from '../../../../property/number.mjs';
import { list_find_property } from '../../../../../list/find/property.mjs';
export async function task_all_require_on_cycle_throw() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let v = task_property_number();
    let task_numbers = list_map_property(all, v);
    for (let t of task_numbers) {
        visit_lambda_none(t, task_number => {
            let v_2 = task_property_number();
            let task = list_find_property(all, v_2, task_number);
            let task_numbers = task_requires_get(task);
            return task_numbers;
        });
    }
}