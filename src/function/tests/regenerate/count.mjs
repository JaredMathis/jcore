import { count } from '../../../count.mjs';
import { function_tests_generated_delete } from '../generated/delete.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_tests_generate_count } from '../generate/count.mjs';
export async function function_tests_regenerate_count(function_name, count) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_tests_generated_delete(function_name);
    let result = await function_tests_generate_count(function_name, count);
    return result;
}