import { tests_generate } from './tests/generate.mjs';
import { string_difference_apply2_parse } from './string/difference/apply2/parse.mjs';
import { function_tests_generate_next } from './function/tests/generate/next.mjs';
import { tests } from './tests.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function sandbox3() {
    arguments_assert(arguments, []);
    await tests();
    await function_tests_generate_next(string_difference_apply2_parse, args1);
    await tests_generate();
}