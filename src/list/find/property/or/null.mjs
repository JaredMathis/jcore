import { boolean_value_true } from '../../../../boolean/value/true.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_find_property_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function list_find_property_or_null(list, property_name, property_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let or_null = boolean_value_true();
    let v = list_find_property_generic(list, property_name, property_value, or_null);
    return v;
    metadata([]);
}