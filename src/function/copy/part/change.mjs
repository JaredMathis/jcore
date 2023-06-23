import { js_identifier_part_change } from '../../../js/identifier/part/change.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_copy } from '../../copy.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_part_change(function_name_prefix, part_to_change_from, part_to_change_to) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        arguments_assert_todo
    ]);
    let function_name_of_copy = js_identifier_part_change(function_name_prefix, part_to_change_from, part_to_change_to);
    await function_copy(function_name_prefix, function_name_of_copy);
}