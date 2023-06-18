import { string_add } from '../../string/add.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { function_name_without_prefix } from '../../function/name/without/prefix.mjs';
import { list_length } from '../length.mjs';
import { object_keys_each } from '../../object/keys/each.mjs';
export function list_multiple_summary(lists) {
    let result = {};
    object_keys_each(lists, (list, list_name) => {
        let prefix = `list`;
        let fn = list_length;
        let suffix = function_name_without_prefix(fn, prefix);
        let length = fn(list);
        let v = string_add(list_name, suffix);
        object_property_initialize(result, v, length);
    });
    return result;
}