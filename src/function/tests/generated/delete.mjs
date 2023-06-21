import { function_tests_generate_after } from '../generate/after.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { function_tests_generated_delete_no_after } from './delete/no/after.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_tests_generated_delete(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = await function_tests_generated_delete_no_after(function_name);
    await function_tests_generate_after();
    return result;
}