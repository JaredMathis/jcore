import { object_property_initialize_if_unset } from '../../../object/property/initialize/if/unset.mjs';
import { list_each_with_index } from '../../../list/each/with/index.mjs';
export function string_to_tree_recursive(list_of_characters, offset) {
    let result = {};
    list_each_with_index(list_of_characters, function v(element, index) {
        if (index < offset) {
            return;
        }
        object_property_initialize_if_unset(result, element, []);
    });
    return result;
}