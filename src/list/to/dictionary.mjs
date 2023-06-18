import { object_property_initialize } from '../../object/property/initialize.mjs';
export function list_to_dictionary(list, element_to_key, element_to_value) {
    let dictionary = {};
    for (let element of list) {
        let key = element_to_key(element);
        let value = element_to_value(element);
        object_property_initialize(dictionary, key, value);
    }
    return dictionary;
}