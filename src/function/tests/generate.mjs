import { function_tests_generate_count_default } from './generate/count/default.mjs';
import { function_tests_generate_after } from './generate/after.mjs';
import { function_tests_generate_generic } from './generate/generic.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    const count = function_tests_generate_count_default();
    await function_tests_generate_generic(function_name, count);
    await function_tests_generate_after();
}