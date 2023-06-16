import { function_tests_generated_string } from './generated/string.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_tests_all } from './all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_identifier_parts_to } from '../../string/identifier/parts/to.mjs';
import { list_contains } from '../../list/contains.mjs';
export async function function_tests_generated(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_tests_all(function_name);
    let generated = list_filter(result, r => {
        let parts = string_identifier_parts_to(r);
        return list_contains(parts, function_tests_generated_string());
    });
    return result;
}