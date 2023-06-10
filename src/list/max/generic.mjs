import { list_compare_generic } from '../compare/generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { value_get } from '../../value/get.mjs';
export function list_max_generic(list, value_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let compare = (a, b) => a > b;
    return list_compare_generic(list, value_get, compare);
}