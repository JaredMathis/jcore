import { add_1 } from '../../add/1.mjs';
import { list_index_of } from './of.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_index_before(list, element_after) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let after_index = list_index_of(list, element_after);
    let add_index = add_1(after_index);
    return add_index;
}