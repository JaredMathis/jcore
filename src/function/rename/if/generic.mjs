import { function_is } from '../../is.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_rename_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_if_generic(prefix_old, prefix_new, predicate, function_name_map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        function_is,
        function_is
    ]);
    function predicate_should_rename(n) {
        let v = predicate(n, prefix_old);
        return v;
    }
    await function_rename_generic(predicate_should_rename, function_name_new_get);
    function function_name_new_get(n_old) {
        let v_2 = function_name_map(n_old, prefix_old, prefix_new);
        return v_2;
    }
    metadata([]);
}