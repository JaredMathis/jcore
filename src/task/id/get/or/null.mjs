import { object_property_get_or } from '../../../../object/property/get/or.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { task_property_id } from '../../../property/id.mjs';
import { data_get } from '../../../../data/get.mjs';
export async function task_id_get_or_null() {
    arguments_assert(arguments, []);
    let lambda = object_property_get_or;
    let data = await data_get();
    let v = task_property_id();
    let v_2 = lambda(data, v, null);
    return v_2;
    metadata([]);
}