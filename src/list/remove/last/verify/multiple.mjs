import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_remove_last_verify } from '../verify.mjs';
import { list_reversed_get } from '../../../reversed/get.mjs';
export function list_remove_last_verify_multiple(list, removals) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    for (let part of list_reversed_get(removals)) {
        list_remove_last_verify(list, part);
    }
}