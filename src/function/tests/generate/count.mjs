import { metadata } from '../../../metadata.mjs';
import { function_tests_generate_after } from './after.mjs';
import { function_tests_generate_generic } from './generic.mjs';
import { count } from '../../../count.mjs';
export async function function_tests_generate_count(function_name, count) {
    await function_tests_generate_generic(function_name, count);
    await function_tests_generate_after();
    metadata([]);
}