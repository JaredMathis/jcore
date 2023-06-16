import { function_tests_generate_count } from './generate/count.mjs';
import { count } from '../../count.mjs';
import { function_tests_generate_count_default } from './generate/count/default.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    const count = function_tests_generate_count_default();
    await function_tests_generate_count(function_name, count);
}