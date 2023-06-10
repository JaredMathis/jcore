import { object_property_get } from '../../../object/property/get.mjs';
import { list_sort_generic } from '../generic.mjs';
export function list_sort_property_generic(removals, sort_property, reverse) {
    list_sort_generic(removals, r => object_property_get(r, sort_property), reverse);
}