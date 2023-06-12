import { function_copy_before } from './before.mjs';
import { function_delete } from '../delete.mjs';
import { function_copy } from '../copy.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_copy_replace(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_copy_before(function_name_of_copy);
    function_delete;
    await function_copy(function_name_to_copy, function_name_of_copy);
}