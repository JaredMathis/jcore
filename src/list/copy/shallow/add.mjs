import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_single_item } from '../../single/item.mjs';
import { list_copy_shallow_add_multiple } from './add/multiple.mjs';
export function list_copy_shallow_add(refactor_stack, child) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = list_single_item(child);
    let v_2 = list_copy_shallow_add_multiple(refactor_stack, v);
    return v_2;
    metadata([]);
}