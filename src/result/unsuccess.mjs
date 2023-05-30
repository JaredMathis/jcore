import { object_property_set } from '../object/property/set.mjs';
export function result_unsuccess(result) {
    object_property_set(result, result_success(), false);
}