import { metadata } from '../../metadata.mjs';
import { list_index_after } from '../index/after.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_add_at } from './at.mjs';
export function list_add_after(list, element_to_add, element_after) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let add_index = list_index_after(list, element_after);
    list_add_at(list, element_to_add, add_index);
    metadata([]);
}