import { string_multiply } from './string/multiply.mjs';
import { random_between } from './random/between.mjs';
import { random_get } from './random/get.mjs';
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
import { range } from './range.mjs';
import { list_add } from './list/add.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    await tests();
    const repository_name = 'a';
    if (false)
        await version_commit_and_removals(repository_name);
    let fn1 = string_difference_get2;
    let fn2 = string_difference_apply2;
    let pairs = [];
    for (let i of range(10)) {
        let left = random_input();
        let right = random_input();
        let args1 = [
            left,
            right
        ];
        let result1 = fn1(...args1);
        console.log({ result1 });
        let args2 = [
            left,
            result1
        ];
        let result2 = fn2(...args2);
        assert(equal(right, result2));
        list_add(pairs, {
            args1,
            args2
        });
    }
    for (let pair of pairs) {
        let {args1, args2} = pair;
        await function_tests_generate_next(fn1, args1);
        await function_tests_generate_next(fn2, args2);
    }
    await tests_generate();
    function random_input() {
        let result = '';
        for (let index of range(random_between(8, 16))) {
            let c = random_get() > 0.5 ? 'a' : 'b';
            let m = string_multiply(c, random_between(1, 3));
            result = result + m;
        }
        return result;
    }
}