import { function_copy_suffix_change } from './copy/suffix/change.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_copy_no_open } from './copy/no/open.mjs';
export async function function_copy(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_copy_suffix_change(function_name_to_copy, function_name_of_copy);
}
async function function_copy_suffix_change(function_name_to_copy, function_name_of_copy) {
    await function_copy_no_open(function_name_to_copy, function_name_of_copy);
    await function_open_vs_code(function_name_of_copy);
}