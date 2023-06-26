import { metadata } from '../../../metadata.mjs';
import { count } from '../../../count.mjs';
import { function_tests_generated_delete_no_after } from '../generated/delete/no/after.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_tests_generate_count } from '../generate/count.mjs';
import { string_is } from '../../../string/is.mjs';
export async function function_tests_regenerate_count(function_name, count) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is
    ]);
    await function_tests_generated_delete_no_after(function_name);
    let result = await function_tests_generate_count(function_name, count);
    return result;
    metadata([]);
}