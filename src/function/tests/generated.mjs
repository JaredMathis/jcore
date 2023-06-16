import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_tests_all } from './all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_generated(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_tests_all(function_name);
    return result;
}