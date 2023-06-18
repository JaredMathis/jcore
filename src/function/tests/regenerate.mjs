import { function_tests_generate } from './generate.mjs';
import { function_tests_generate_after } from './generate/after.mjs';
import { function_tests_generated_delete_no_after } from './generated/delete/no/after.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_regenerate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_tests_generated_delete_no_after(function_name);
    function_tests_generate;
    await function_tests_generate_after();
    return result;
}