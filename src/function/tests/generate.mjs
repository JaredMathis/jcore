import { function_tests_generate_count } from './generate/count.mjs';
import { count } from '../../count.mjs';
import { function_tests_generate_count_default } from './generate/count/default.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_to } from '../../string/to.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    const count = function_tests_generate_count_default();
    let count_string = string_to(count);
    await function_tests_generate_count(function_name, count_string);
}