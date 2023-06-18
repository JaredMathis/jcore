import { subtract } from '../../../subtract.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_sort_generic } from '../generic.mjs';
export function list_sort_property_generic(list, sort_property, reverse) {
    list_sort_generic(list, function v(r) {
        return object_property_get(r, sort_property);
    }, reverse, subtract);
}