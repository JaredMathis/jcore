import { list_sort } from '../../../list/sort.mjs';
import { task_required_bys } from '../../required/bys.mjs';
import { task_current } from '../../current.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../../all/unsummarized.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { task_property_number } from '../../property/number.mjs';
export async function task_current_required_bys() {
    arguments_assert(arguments, []);
    let all_unsummarized = await task_all_unsummarized();
    let current_result = await task_current();
    let task_number = object_property_get(current_result, task_property_number());
    let required_bys = task_required_bys(task_number, all_unsummarized);
    list_sort(required_bys);
    return required_bys;
}