import { metadata } from '../../metadata.mjs';
import { function_delete } from '../delete.mjs';
import { function_copy } from '../copy.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_copy_replace(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    await function_delete(function_name_of_copy);
    await function_copy(function_name_to_copy, function_name_of_copy);
    metadata([]);
}