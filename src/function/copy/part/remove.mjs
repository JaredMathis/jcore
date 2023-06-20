import { function_copy } from '../../copy.mjs';
import { string_identifier_combine } from '../../../string/identifier/combine.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_part_remove(function_name_prefix, part_to_remove) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let function_name_to_copy = ;
    let function_name_of_copy = ;
    await function_copy(function_name_to_copy, function_name_of_copy);
}