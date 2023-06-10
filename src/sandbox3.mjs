import { tests_generate } from './tests/generate.mjs';
import { string_difference_apply2_parse } from './string/difference/apply2/parse.mjs';
import { function_tests_generate_next } from './function/tests/generate/next.mjs';
import { tests } from './tests.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export async function sandbox3() {
    arguments_assert(arguments, []);
    return;
    let values = [
        '2+a',
        '3-2',
        '10+def',
        '123-5'
    ];
    await tests();
    for (let v of values) {
        await function_tests_generate_next(string_difference_apply2_parse, [v]);
    }
    await tests_generate();
}