import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_tests_copy } from '../copy.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_tests_copy_replace(function_name_from, function_name_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await function_tests_copy(function_name_from, function_name_to);
    return result;
}