import { swap_generic } from '../swap/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_set } from './set.mjs';
import { list_get } from './get.mjs';
export function list_swap(list, index_from, index_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let generic_get = list_get;
    let generic_set = list_set;
    swap_generic(generic_get, list, index_from, index_to, generic_set);
}