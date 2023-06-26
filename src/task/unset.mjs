import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_remove } from '../object/property/remove.mjs';
import { task_property_id } from './property/id.mjs';
import { data_map } from '../data/map.mjs';
export async function task_unset() {
    arguments_assert(arguments, []);
    let v_3 = function v_2(data) {
        let v = task_property_id();
        object_property_remove(data, v);
    };
    await data_map(v_3);
    metadata([]);
}