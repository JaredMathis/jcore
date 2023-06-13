import { arguments_assert_todo } from './arguments/assert/todo.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function count(then, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let list = [];
    then(list_new_then_add);
    function list_new_then_add(element) {
        lambda(list, element);
    }
    return list;
}