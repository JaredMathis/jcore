import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { list_join } from '../../../list/join.mjs';
export function string_identifier_parts_from(list_parts) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = function_name_separator();
    let v_2 = list_join(list_parts, v);
    return v_2;
}