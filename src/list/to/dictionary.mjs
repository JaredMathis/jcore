import { function_is } from '../../function/is.mjs';
import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_initialize } from '../../object/property/initialize.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_to_dictionary(list, element_to_key, element_to_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is,
        function_is
    ]);
    let dictionary = {};
    for (let element of list) {
        let key = element_to_key(element);
        let value = element_to_value(element);
        object_property_initialize(dictionary, key, value);
    }
    return dictionary;
    metadata([metadata_generated()]);
}