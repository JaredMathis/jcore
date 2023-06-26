import { metadata } from '../../../metadata.mjs';
import { object_property_initialize } from '../../../object/property/initialize.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_to_dictionary_async(list, element_to_key, element_to_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let dictionary = {};
    for (let element of list) {
        let key = await element_to_key(element);
        let value = await element_to_value(element);
        object_property_initialize(dictionary, key, value);
    }
    return dictionary;
    metadata([]);
}