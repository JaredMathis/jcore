import { function_copy } from '../../copy.mjs';
import { js_identifier_parts_from } from '../../../js/identifier/parts/from.mjs';
import { list_remove } from '../../../list/remove.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_index_of_single } from '../../../list/index/of/single.mjs';
export async function function_copy_part_change(function_name_prefix, part_to_change) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let function_name_prefix_parts = js_identifier_parts_to(function_name_prefix);
    list_index_of_single(function_name_prefix_parts, part_to_change)
    let function_name_of_copy = js_identifier_parts_from(function_name_prefix_parts);
    await function_copy(function_name_prefix, function_name_of_copy);
}