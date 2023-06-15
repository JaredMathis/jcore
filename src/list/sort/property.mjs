import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { list_sort_property_generic } from './property/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_sort_property(removals, sort_property) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = list_sort_property_generic(removals, sort_property, reverse);
    return result;
}