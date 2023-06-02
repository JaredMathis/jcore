import { function_all_tests } from '../all/tests.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export async function function_tests_filtered(filter) {
    arguments_assert(arguments, [tautology]);
    let filtered = await function_all_tests();
    let filtered2 = filter(filtered);
    return filtered2;
    metadata([]);
}