import { function_tests_generate_next } from './function/tests/generate/next.mjs';
import { tests_generate } from './tests/generate.mjs';
import { tests } from './tests.mjs';
import { string_difference_get2 } from './string/difference/get2.mjs';
import { log } from './log.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_difference_apply2 } from './string/difference/apply2.mjs';
import { assert } from './assert.mjs';
import { equal } from './equal.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    await tests();
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let left = 'zfz';
    let right = 'abcdefabcde';
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
    await function_tests_generate_next(fn1, args1);
    await function_tests_generate_next(fn2, args2);
    await tests_generate();
}