import { list_copy } from '../../../copy.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_add } from '../../../add.mjs';
export function list_copy_shallow_add_multiple(refactor_stack, multiple) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let refactor_stack_child = list_copy(refactor_stack);
    for (let m of multiple) {
        list_add(refactor_stack_child, m);
    }
    return refactor_stack_child;
}