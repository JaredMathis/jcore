import { add_1 } from '../../../add/1.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_initialize_if_unset } from '../../../object/property/initialize/if/unset.mjs';
import { list_each_with_index } from '../../../list/each/with/index.mjs';
export function string_to_tree_recursive(list_of_characters, offset) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = {};
    list_each_with_index(list_of_characters, function v(element, index) {
        if (index < offset) {
            return;
        }
        object_property_initialize_if_unset(result, element, []);
        string_to_tree_recursive(list_of_characters, add_1(index));
    });
    return result;
}