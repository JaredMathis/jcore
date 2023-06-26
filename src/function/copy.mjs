import { metadata } from '../metadata.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_copy_no_open } from './copy/no/open.mjs';
export async function function_copy(function_name_to_copy, function_name_of_copy) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    await function_copy_no_open(function_name_to_copy, function_name_of_copy);
    await function_open_vs_code(function_name_of_copy);
    metadata([]);
}