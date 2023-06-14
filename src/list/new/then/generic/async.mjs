import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function list_new_then_generic_async(then, lambda) {
    await arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let list = [];
    then(list_new_then_add);
    function list_new_then_add(element) {
        await arguments_assert(arguments, [defined_is]);
        lambda(list, element);
    }
    return list;
}