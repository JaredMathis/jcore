import { tests_name_next } from './tests/name/next.mjs';
import { string_digit_is } from './string/digit/is.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { range } from './range.mjs';
import { tests_add } from './tests/add.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    let function_name = function_name_get(string_digit_is);
    for (let i of range(10)) {
        let s = `${ i }`;
        let test_name = await tests_name_next(function_name);
        tests_add();
    }
}