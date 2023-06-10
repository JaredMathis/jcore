import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { subtract } from '../../subtract.mjs';
import { value_get } from '../../value/get.mjs';
export function list_sort_generic(list, value_get, reverse) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    list.sort((a, b) => subtract(value_get(a), value_get(b)));
    if (reverse) {
        list.reverse();
    }
}