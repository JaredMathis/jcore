import { string_identifier_with_prefix } from '../../string/identifier/with/prefix.mjs';
import { string_identifier_sub_is } from '../../string/identifier/sub/is.mjs';
import { function_copy } from '../copy.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_copy_suffix(function_name_prefix, function_name_suffix_from, function_name_suffix_to) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_sub_is
    ]);
    let function_name_to_copy = string_identifier_with_prefix(function_name_prefix, function_name_suffix_from);
    let function_name_of_copy = string_identifier_with_prefix(function_name_prefix, function_name_suffix_to);
    await function_copy(function_name_to_copy, function_name_of_copy);
}