import { log } from '../../../log.mjs';
import { list_intersection } from '../../../list/intersection.mjs';
import { list_map_property } from '../../../list/map/property.mjs';
import { visit } from '../../../visit.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../unsummarized.mjs';
import { task_requires_get } from '../../requires/get.mjs';
import { task_property_number } from '../../property/number.mjs';
import { list_find_property } from '../../../list/find/property.mjs';
export async function task_all_require_cycles() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let remaining = list_map_property(all, task_property_number());
    for (let a of all) {
        visit(a, task_number => {
            let task = list_find_property(all, task_property_number(), task_number);
            let task_numbers = task_requires_get(task);
            let filtered = list_intersection(task_numbers, remaining);
            console.log({
                task_number,
                filtered
            });
            return filtered;
        }, v => {
            let {node} = v;
            list_new_then_add(node);
        });
    }
}