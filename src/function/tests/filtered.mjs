import { function_all_tests } from '../all/tests.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { function_is } from '../is.mjs';
export async function function_tests_filtered(filter) {
    arguments_assert(arguments, [function_is]);
    let filtered = await function_all_tests();
    let filtered2 = filter(filtered);
    return filtered2;
    metadata([]);
}