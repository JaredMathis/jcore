import { function_is } from '../../../function/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { task_property_id } from '../../property/id.mjs';
import { data_get } from '../../../data/get.mjs';
export async function task_id_get_generic(lambda) {
    arguments_assert(arguments, [function_is]);
    let data = await data_get();
    let v = task_property_id();
    let v_3 = null;
    let v_2 = lambda(data, v, v_3);
    return v_2;
    metadata([]);
}