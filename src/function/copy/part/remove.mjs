import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { function_copy } from '../../copy.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove } from '../../../list/remove.mjs';
export async function function_copy_part_remove(function_name_prefix, part_to_remove) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let function_name_prefix_parts = string_identifier_parts_to(function_name_prefix);
    list_remove(function_name_prefix_parts, part_to_remove);
    let function_name_of_copy = string_identifier_parts_from(function_name_prefix_parts);
    await function_copy(function_name_prefix, function_name_of_copy);
}