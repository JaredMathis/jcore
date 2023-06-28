import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_tests_generate_after } from './after.mjs';
import { function_tests_generate_generic } from './generic.mjs';
import { count } from '../../../count.mjs';
export async function function_tests_generate_count(function_name, count) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await function_tests_generate_generic(function_name, count);
    await function_tests_generate_after();
    metadata([]);
}