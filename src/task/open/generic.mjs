import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_property_title } from '../property/title.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_map } from '../../list/map.mjs';
import { task_property_number } from '../property/number.mjs';
import { list_sort_property } from '../../list/sort/property.mjs';
import { list_filter } from '../../list/filter.mjs';
import { task_open_get } from './get.mjs';
export async function task_open_generic(filter_get) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let open = await task_open_get();
    let filtered = list_filter(open, filter_get(open));
    list_sort_property(filtered, task_property_number());
    let summaries = list_map(filtered, map);
    return summaries;
    function map(o) {
        return `${ object_property_get(o, task_property_number()) } ${ object_property_get(o, task_property_title()) }`;
    }
}