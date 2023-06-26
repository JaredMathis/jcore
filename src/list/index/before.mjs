import { metadata } from '../../metadata.mjs';
import { list_index_of } from './of.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { subtract_1 } from '../../subtract/1.mjs';
export function list_index_before(list, element_before) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let after_index = list_index_of(list, element_before);
    let before_index = subtract_1(after_index);
    return before_index;
    metadata([]);
}