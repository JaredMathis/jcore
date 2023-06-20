import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { function_copy } from '../../copy.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_part_remove(function_name_prefix, part_to_remove) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let parts = string_identifier_parts_from(part_to_remove);
    await function_copy(function_name_prefix, function_name_of_copy);
}