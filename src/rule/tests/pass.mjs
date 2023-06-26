import { metadata } from '../../metadata.mjs';
import { tests } from '../../tests.mjs';
export async function rule_tests_pass() {
    await tests();
    metadata([]);
}