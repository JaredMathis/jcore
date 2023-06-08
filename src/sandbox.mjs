import { string_function_tests_sub } from './string/function/tests/sub.mjs';
import { function_tests_generate_after } from './function/tests/generate/after.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { range } from './range.mjs';
import { string_function_tests_name_is } from './string/function/tests/name/is.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    let function_name = function_name_get(string_function_tests_name_is);
    let s = string_function_tests_sub();
    let inputs = `_,a,${ s },a${s},a${s}1`;
    for (let i of range(12)) {
        let adjusted = i - 1;
        let s = `${ adjusted }`;
        let test_name = await tests_name_next(function_name);
        await function_tests_generate_generic_each(function_name, test_name, [s]);
    }
    await function_tests_generate_after();
}