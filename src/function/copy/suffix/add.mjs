import { metadata } from '../../../metadata.mjs';
import { function_copy } from '../../copy.mjs';
import { js_identifier_parts_from_combine } from '../../../js/identifier/parts/from/combine.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
export async function function_copy_suffix_add(function_name_old, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_suffix_parts = js_identifier_parts_to(function_name_suffix);
    let function_name_old_parts = js_identifier_parts_to(function_name_old);
    let v = [
        function_name_old_parts,
        function_name_suffix_parts
    ];
    let function_name_new = js_identifier_parts_from_combine(v);
    await function_copy(function_name_old, function_name_new);
    metadata([]);
}