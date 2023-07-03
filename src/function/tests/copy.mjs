import { function_tests_all } from './all.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { list_empty_not } from '../../list/empty/not.mjs';
export async function function_tests_copy(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await function_tests_all(function_name);
    assert(list_empty_not(result));
}