import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_combine } from '../../string/combine.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { function_name_without_prefix } from '../../function/name/without/prefix.mjs';
import { list_length } from '../length.mjs';
import { object_keys_each } from '../../object/keys/each.mjs';
export function list_multiple_summary(lists) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = {};
    let v_3 = function v_2(list, list_name) {
        let prefix = `list`;
        let fn = list_length;
        let suffix = function_name_without_prefix(fn, prefix);
        let length = fn(list);
        let v = string_combine(list_name, suffix);
        object_property_initialize(result, v, length);
    };
    object_keys_each(lists, v_3);
    return result;
    metadata([]);
}