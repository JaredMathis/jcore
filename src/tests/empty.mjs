import { tests_name_next } from './name/next.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { tests_generate } from './generate.mjs';
import { function_auto } from '../function/auto.mjs';
export async function tests_empty(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let test_name = await tests_name_next(function_name);
    await function_auto(test_name);
    await tests_generate();
    metadata([]);
}