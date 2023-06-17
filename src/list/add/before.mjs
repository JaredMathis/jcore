import { list_add_at } from './at.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_index_of } from '../index/of.mjs';
export function list_add_before(list, element_to_add, element_before) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let before_index = list_index_of(list, element_before);
    list_add_at(list, element_to_add, before_index);
}