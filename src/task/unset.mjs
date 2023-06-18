import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_remove } from '../object/property/remove.mjs';
import { task_property_id } from './property/id.mjs';
import { data_map } from '../data/map.mjs';
export async function task_unset() {
    arguments_assert(arguments, []);
    await data_map(function v_2(data) {
        let v = task_property_id();
        object_property_remove(data, v);
    });
    metadata([]);
}