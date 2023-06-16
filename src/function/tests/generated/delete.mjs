import { function_tests_generated } from '../generated.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { function_delete } from '../../delete.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
export async function function_tests_generated_delete(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let generateds = await function_tests_generated(function_name);
    if (!list_length_is_0(generateds)) {
        for (let g of generateds) {
            await function_delete(g);
        }
    }
    return generateds;
}