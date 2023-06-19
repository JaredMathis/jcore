import { task_property_id } from '../../property/id.mjs';
import { data_get } from '../../../data/get.mjs';
export async function task_id_get_generic(lambda) {
    let data = await data_get();
    let v = task_property_id();
    let v_2 = lambda(data, v, null);
    return v_2;
}