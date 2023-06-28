import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { subtract } from '../../../subtract.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_sort_generic } from '../generic.mjs';
export function list_sort_property_generic(list, sort_property, reverse) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_3 = function v(r) {
        let v_2 = object_property_get(r, sort_property);
        return v_2;
    };
    list_sort_generic(list, v_3, reverse, subtract);
    metadata([]);
}