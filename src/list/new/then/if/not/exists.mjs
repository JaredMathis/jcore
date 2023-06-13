import { list_new_then_generic } from '../../generic.mjs';
import { list_add } from '../../../../add.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function list_new_then_if_not_exists(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add;
    return list_new_then_generic(then, lambda);
}