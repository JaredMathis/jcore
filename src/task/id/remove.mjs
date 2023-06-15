import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_remove } from '../../object/property/remove.mjs';
import { task_property_id } from '../property/id.mjs';
import { data_map } from '../../data/map.mjs';
export async function task_id_remove() {
    arguments_assert(arguments, []);
    await data_map(data => {
        object_property_remove(data, task_property_id());
    });
    metadata([]);
}