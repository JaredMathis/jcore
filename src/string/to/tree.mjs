import { object_property_initialize_if_unset } from '../../object/property/initialize/if/unset.mjs';
import { list_each_with_index } from '../../list/each/with/index.mjs';
import { string_to_list } from './list.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_to_tree(s) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let offset = 0;
    let s_list = string_to_list(s);
    let result = {};
    list_each_with_index(s_list, function v(element, index) {
        if (index < offset) {
            return;
        }
        object_property_initialize_if_unset(result, element, []);

    });
    return result;
}