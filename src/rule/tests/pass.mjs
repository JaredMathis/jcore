import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { tests } from '../../tests.mjs';
export async function rule_tests_pass() {
    arguments_assert(arguments, []);
    await tests();
    metadata([]);
}