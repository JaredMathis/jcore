import { function_is } from '../../../function/is.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function list_add_property_generic(la, object, property_name) {
    arguments_assert(arguments, [
        function_is,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let property_value = object_property_get(object, property_name);
    la(property_value);
    metadata([]);
}