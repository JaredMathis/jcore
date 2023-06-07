import { tests_name_next } from './name/next.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { tests_generate } from './generate.mjs';
import { function_auto } from '../function/auto.mjs';
export async function tests_add(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let test_name = await tests_name_next(function_name);
    await function_auto(test_name);
    await tests_generate();
    metadata([]);
}