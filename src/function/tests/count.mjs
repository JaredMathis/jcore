import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { tests } from '../../tests.mjs';
import { list_length } from '../../list/length.mjs';
import { function_tests_all } from './all.mjs';
export async function function_tests_count(function_name) {
    arguments_assert(arguments, [tautology]);
    let tests = await function_tests_all(function_name);
    return list_length(tests);
    metadata([]);
}