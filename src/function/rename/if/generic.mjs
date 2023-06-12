import { function_rename_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_if_generic(prefix_old, prefix_new, predicate, function_name_map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    function predicate_name(n) {
        return predicate(n, prefix_old);
    }
    await function_rename_generic(predicate_name, function_name_new_get);
    function function_name_new_get(n_old) {
        return function_name_map(n_old, prefix_old, prefix_new);
    }
}