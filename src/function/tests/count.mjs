import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { tests } from '../../tests.mjs';
import { list_length } from '../../list/length.mjs';
import { function_tests_all } from './all.mjs';
export async function function_tests_count(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let tests = await function_tests_all(function_name);
    let v = list_length(tests);
    return v;
    metadata([]);
}