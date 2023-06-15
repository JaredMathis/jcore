import { list_filter_property } from '../list/filter/property.mjs';
import { task_all } from './all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_open() {
    arguments_assert(arguments, []);
    let all = await task_all();
    list_filter_property;
}