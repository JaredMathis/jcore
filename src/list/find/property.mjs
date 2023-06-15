import { object_property_get } from '../../object/property/get.mjs';
import { list_find } from '../find.mjs';
export function list_find_property(imports, property_name, removal_name) {
    return list_find(imports, i => object_property_get(i, property_name) === removal_name);
}