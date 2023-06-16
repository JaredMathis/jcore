import { list_intersection } from '../../../list/intersection.mjs';
import { list_map_property } from '../../../list/map/property.mjs';
import { list_remove_until_empty } from '../../../list/remove/until/empty.mjs';
import { visit } from '../../../visit.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_all_unsummarized } from '../unsummarized.mjs';
import { task_requires_get } from '../../requires/get.mjs';
import { list_adder } from '../../../list/adder.mjs';
import { list_first } from '../../../list/first.mjs';
import { task_property_number } from '../../property/number.mjs';
import { list_find_property } from '../../../list/find/property.mjs';
export async function task_all_require_cycles() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let remaining = list_map_property(all, task_property_number());
    list_remove_until_empty(remaining, removals_get);
    function removals_get() {
        let task_number_current = list_first(remaining);
        let visited = list_adder(list_new_then_add => {
            visit(task_number_current, task_number => {
                let task = list_find_property(all, task_property_number(), task_number);
                let task_numbers = task_requires_get(task);
                let filtered = list_intersection(task_numbers, remaining);
                console.log({filtered})
                return filtered;
            }, v => {
                let {node} = v;
                console.log({node})
                list_new_then_add(node);
            });
        });
        return visited;
    }
}