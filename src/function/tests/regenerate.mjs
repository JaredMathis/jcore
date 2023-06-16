import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_tests_generate } from './generate.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_regenerate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_tests_generate(function_name);
    return result;
}