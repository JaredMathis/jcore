import { tasks_open_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_map } from '../../list/map.mjs';
import { task_property_number } from '../../task/property/number.mjs';
import { list_sort_property } from '../../list/sort/property.mjs';
import { list_filter } from '../../list/filter.mjs';
import { function_is } from '../../function/is.mjs';
export async function tasks_open_generic(filter_get, map_with_all_unsummarized) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let {open, all} = await tasks_open_all_unsummarized();
    let filtered = list_filter(open, filter_get(open));
    list_sort_property(filtered, task_property_number());
    let summaries = list_map(filtered, f => map_with_all_unsummarized(f, all));
    return summaries;
}