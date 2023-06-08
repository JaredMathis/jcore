import { string_function_tests_sub } from './string/function/tests/sub.mjs';
import { function_tests_generate_after } from './function/tests/generate/after.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_function_tests_name_is } from './string/function/tests/name/is.mjs';
import { string_split } from './string/split.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    let function_name = function_name_get(string_function_tests_name_is);
    let s = string_function_tests_sub();
    let inputs_string = `_,a,${ s },a${ s },a${ s }1`;
    let inputs = string_split(inputs_string, ',');
    for (let i of inputs) {
        let test_name = await tests_name_next(function_name);
        await function_tests_generate_generic_each(function_name, test_name, [i]);
    }
    await function_tests_generate_after();
}