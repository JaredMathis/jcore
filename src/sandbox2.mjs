import { tests } from './tests.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { string_difference_get2 } from './string/difference/get2.mjs';
import { log } from './log.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { function_name_get } from './function/name/get.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = 'aaa';
    let right = 'abca';
    let fn = string_difference_get2;
    let args = [
        left,
        right
    ];
    let result = fn(...args);
    console.log({ result });
    await tests();
    return;
    let function_name = function_name_get(fn);
    let test_name = await tests_name_next(function_name);
    await function_tests_generate_generic_each(function_name, test_name, args);
}