import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_tests_all } from './all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_includes } from '../../string/includes.mjs';
import { function_tests_generated_string_sub } from './generated/string/sub.mjs';
export async function function_tests_generated(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let result = await function_tests_all(function_name);
    let generated = list_filter(result, function v(r) {
        return string_includes(r, function_tests_generated_string_sub());
    });
    return generated;
}