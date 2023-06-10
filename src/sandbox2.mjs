import { tests_generate } from './tests/generate.mjs';
import { tests } from './tests.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { string_difference_get2 } from './string/difference/get2.mjs';
import { log } from './log.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { function_name_get } from './function/name/get.mjs';
import { string_difference_apply2 } from './string/difference/apply2.mjs';
import { assert } from './assert.mjs';
import { equal } from './equal.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = '';
    let right = '';
    let fn1 = string_difference_get2;
    let args1 = [
        left,
        right
    ];
    let result1 = fn1(...args1);
    console.log({ result1 });
    let fn2 = string_difference_apply2;
    let args2 = [
        left,
        result1
    ];
    let result2 = fn2(...args2);
    assert(equal(right, result2));
    await tests();
    return;
    let function_name = function_name_get(fn1);
    let test_name = await tests_name_next(function_name);
    await function_tests_generate_generic_each(function_name, test_name, args1);
    await tests_generate();
}