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
    let generic_set;
    let from = list_get(list, index_from);
    let to = list_get(list, index_to);
    list_set(list, index_to, from);
    list_set(list, index_from, to);
}