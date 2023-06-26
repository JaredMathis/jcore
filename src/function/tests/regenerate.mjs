import { metadata } from '../../metadata.mjs';
import { function_tests_generate } from './generate.mjs';
import { function_tests_generated_delete_no_after } from './generated/delete/no/after.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_regenerate(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    await function_tests_generated_delete_no_after(function_name);
    let result = await function_tests_generate(function_name);
    return result;
    metadata([]);
}