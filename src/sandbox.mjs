import { string_letter_digit_or_underscore_is } from './string/letter/digit/or/underscore/is.mjs';
import { function_tests_generate_after } from './function/tests/generate/after.mjs';
import { function_tests_generate_generic_each } from './function/tests/generate/generic/each.mjs';
import { tests_name_next } from './tests/name/next.mjs';
import { function_name_get } from './function/name/get.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_split } from './string/split.mjs';
export async function sandbox() {
    arguments_assert(arguments, []);
    let functions = [string_letter_digit_or_underscore_is];
    for (let f of functions) {
        let function_name = function_name_get(f);
        let inputs_string = `1,2,3,_,d,b,c`;
        let inputs = string_split(inputs_string, ',');
        for (let i of inputs) {
            let test_name = await tests_name_next(function_name);
            await function_tests_generate_generic_each(function_name, test_name, [i]);
        }
        await function_tests_generate_after();
    }
}