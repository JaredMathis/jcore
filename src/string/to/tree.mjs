import { object_keys_recursive } from '../../object/keys/recursive.mjs';
import { object_copy_shallow } from '../../object/copy/shallow.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
import { string_get } from '../get.mjs';
import { string_to_tree_recursive } from './tree/recursive.mjs';
import { string_to_list } from './list.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { add_1 } from '../../add/1.mjs';
import { object_property_set } from '../../object/property/set.mjs';
import { equal } from '../../equal.mjs';
import { log } from '../../log.mjs';
import { list_contains } from '../../list/contains.mjs';
import { list_add } from '../../list/add.mjs';
import { string_is } from '../is.mjs';
export function string_to_tree(s) {
    arguments_assert(arguments, [string_is]);
    let result = {};
    const s_index_last = string_length(s) - 1;
    for (let index = string_length(s) - 1; index >= 0; index--) {
        let s_index = string_get(s, index);
        const s_is = [s_index];
        const index_next = add_1(index);
        let s_next;
        const s_index_next_valid = index_next <= s_index_last;
        if (s_index_next_valid) {
            s_next = string_get(s, index_next);
            list_add(s_is, s_next);
        }
        for (let s_i of s_is) {
            object_property_initialize_if_unset(result, s_i, {});
        }
        if (s_index_next_valid) {
            let sub_result = object_property_get(result, s_index);
            let result_s_index_next = object_property_get(result, s_next);
            let keys = object_keys_recursive(result);
            if (equal(s_index, s_next) || list_contains(keys, s_index)) {
                result_s_index_next = object_copy_shallow(result_s_index_next);
            }
            object_property_set(sub_result, s_next, result_s_index_next);
        }
    }
    return result;
    let offset = 0;
    let list_of_characters = string_to_list(s);
    return string_to_tree_recursive(list_of_characters, offset);
}