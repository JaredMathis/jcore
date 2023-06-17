import { result_property_success_get } from '../property/success/get.mjs';
import { not } from '../../not.mjs';
export function result_unsuccess_is(result) {
    return not(result_property_success_get(result));
}