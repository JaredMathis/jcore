import { function_copy } from '../../copy.mjs';
import { error } from '../../../error.mjs';
import { string_identifier_parts_from_combine } from '../../../string/identifier/parts/from/combine.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { json_to } from '../../../json/to.mjs';
export async function function_copy_suffix_add(function_name_old, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_suffix_parts = string_identifier_parts_to(function_name_suffix);
    let function_name_old_parts = string_identifier_parts_to(function_name_old);
    let function_name_new = string_identifier_parts_from_combine([
        function_name_old_parts,
        function_name_suffix_parts
    ]);
    error(json_to({
        function_name_old,
        function_name_new
    }));
    await function_copy(function_name_old, function_name_new);
}