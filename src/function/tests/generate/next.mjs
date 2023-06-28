import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_tests_generate_generic_each } from './generic/each.mjs';
import { tests_name_next } from '../../../tests/name/next.mjs';
import { function_name_get } from '../../name/get.mjs';
export async function function_tests_generate_next(fn1, args1) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name = function_name_get(fn1);
    let test_name = await tests_name_next(function_name);
    await function_tests_generate_generic_each(function_name, test_name, args1);
    metadata([]);
}