import { version_commits_get } from './version/commits/get.mjs';
import { version_repository_file_size_max } from './version/repository/file/size/max.mjs';
import { version_repository_default } from './version/repository/default.mjs';
import { database_set } from './database/set.mjs';
import { version_differences } from './version/differences.mjs';
import { string_difference_apply_parse } from './string/difference/apply/parse.mjs';
import { string_multiply } from './string/multiply.mjs';
import { random_get } from './random/get.mjs';
import { random_between } from './random/between.mjs';
import { tests_generate } from './tests/generate.mjs';
import { function_tests_generate_next } from './function/tests/generate/next.mjs';
import { list_add } from './list/add.mjs';
import { equal } from './equal.mjs';
import { assert } from './assert.mjs';
import { range } from './range.mjs';
import { string_difference_apply } from './string/difference/apply.mjs';
import { string_difference_get } from './string/difference/get.mjs';
import { tests } from './tests.mjs';
import { version_commit_and_removals } from './version/commit/and/removals.mjs';
import { log } from './log.mjs';
import { string_letter_is } from './string/letter/is.mjs';
import { function_tests_generate_after } from './function/tests/generate/after.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_split } from './string/split.mjs';
import { string_underscore_is } from './string/underscore/is.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    const repository_name = version_repository_default();
    let parsed = await version_commits_get(repository_name);
    console.log({ parsed });
    return;
    let file_size_max = await version_repository_file_size_max(repository_name);
    console.log({ file_size_max });
    return;
    await version_commit_and_removals(repository_name);
    return;
    const collection_path = 'cities';
    const document_path = 'new-city-id';
    const document_data = { message: 'test' };
    await database_set(collection_path, document_path, document_data);
    return;
    let differences = await version_differences(repository_name);
    console.log(differences);
    return;
    await tests();
    let fn1 = string_difference_get;
    let fn2 = string_difference_apply;
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
    return;
    let values = [
        '2+a',
        '3-2',
        '10+def',
        '123-5'
    ];
    await tests();
    for (let v of values) {
        await function_tests_generate_next(string_difference_apply_parse, [v]);
    }
    await tests_generate();
    return;
    let functions = [
        string_letter_is,
        string_underscore_is
    ];
    for (let f of functions) {
        let function_name = function_name_get(f);
        log(function_name);
        let inputs_string = `1,2,3,_,d,b,c`;
        let inputs = string_split(inputs_string, ',');
        for (let i of inputs) {
            let test_name = await tests_name_next(function_name);
            await function_tests_generate_generic_each(function_name, test_name, [i]);
        }
        await function_tests_generate_after();
    }
    return;
}