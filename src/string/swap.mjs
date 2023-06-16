import { swap_generic } from '../swap/generic.mjs';
import { list_set } from '../list/set.mjs';
import { list_get } from '../list/get.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function string_swap(list, index_from, index_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let generic_get = list_get;
    let generic_set = list_set;
    return swap_generic(generic_get, generic_set, list, index_from, index_to);
}