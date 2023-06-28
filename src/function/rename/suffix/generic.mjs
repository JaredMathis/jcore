import { function_is } from '../../is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_rename_single } from '../single.mjs';
import { list_join } from '../../../list/join.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export async function function_rename_suffix_generic(function_name_old_parts, function_name_old_to_new) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let v = function_name_separator();
    let function_name_old = list_join(function_name_old_parts, v);
    let function_name_new = function_name_old_to_new(function_name_old);
    await function_rename_single(function_name_old, function_name_new);
    metadata([]);
}