import { list_find_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function list_find_property(list, property_name, property_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let or_null = false;
    return list_find_generic(list, i => object_property_get(i, property_name) === property_value, or_null);
}