import { result_property_success_get } from '../property/success/get.mjs';
import { not } from '../../not.mjs';
export function result_unsuccess_is(result) {
    let v = result_property_success_get(result);
    let v_2 = not(v);
    return v_2;
    metadata([]);
}