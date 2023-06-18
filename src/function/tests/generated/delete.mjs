import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { function_tests_generated_delete_no_after } from './delete/no/after.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_tests_generated_delete(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_tests_generated_delete_no_after(function_name);
    return result;
}