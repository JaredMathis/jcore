import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function swap_generic(generic_get, generic_set, list, index_from, index_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let from = generic_get(list, index_from);
    let to = generic_get(list, index_to);
    list = generic_set(list, index_to, from);
    list = generic_set(list, index_from, to);
    return list;
    metadata([]);
}