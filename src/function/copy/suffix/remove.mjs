import { metadata } from '../../../metadata.mjs';
import { js_identifier_parts_from } from '../../../js/identifier/parts/from.mjs';
import { function_copy } from '../../copy.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_suffix_remove(function_name_new, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = [
        function_name_new,
        function_name_suffix
    ];
    let function_name_old = js_identifier_parts_from(v);
    await function_copy(function_name_old, function_name_new);
    metadata([]);
}