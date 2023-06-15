import { task_property_open } from './property/open.mjs';
import { list_filter_property } from '../list/filter/property.mjs';
import { task_all } from './all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_property_state } from './property/state.mjs';
import { list_map } from '../list/map.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_number } from './property/number.mjs';
export async function task_open() {
    arguments_assert(arguments, []);
    let all = await task_all();
    let open = list_filter_property(all, task_property_state(), task_property_open());
    let summaries = list_map(open, o => `${object_property_get(o, task_property_number())} ${object_property_get(o, task_property_state())}`)
    return summaries
}