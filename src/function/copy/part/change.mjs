import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_copy } from '../../copy.mjs';
import { js_identifier_parts_from } from '../../../js/identifier/parts/from.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_index_of_single } from '../../../list/index/of/single.mjs';
export async function function_copy_part_change(function_name_prefix, part_to_change, part_to_change_to) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        arguments_assert_todo
    ]);
    let function_name_prefix_parts = js_identifier_parts_to(function_name_prefix);
    let index = list_index_of_single(function_name_prefix_parts, part_to_change);
    let function_name_of_copy = js_identifier_parts_from(function_name_prefix_parts);
    await function_copy(function_name_prefix, function_name_of_copy);
}