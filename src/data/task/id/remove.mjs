import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_remove } from '../../../object/property/remove.mjs';
import { data_task_id } from '../id.mjs';
import { data_map } from '../../map.mjs';
export async function data_task_id_remove() {
    arguments_assert(arguments, []);
    await data_map(data => {
        object_property_remove(data, data_task_id());
    });
    metadata([]);
}