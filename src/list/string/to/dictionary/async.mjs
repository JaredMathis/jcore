import { object_property_initialize } from '../../../../object/property/initialize.mjs';
export async function list_string_to_dictionary_async(keys, key_to_value) {
    let dictionary = {};
    for (let key of keys) {
        let value = await key_to_value(key);
        object_property_initialize(dictionary, key, value);
    }
    return dictionary;
}