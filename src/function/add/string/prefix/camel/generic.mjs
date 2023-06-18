import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_add_string_prefix_generic } from '../generic.mjs';
import { string_case_camel_to_snake } from '../../../../../string/case/camel/to/snake.mjs';
export async function function_add_string_prefix_camel_generic(prefix, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let snake = string_case_camel_to_snake(value);
    let v = await function_add_string_prefix_generic(prefix, snake, value);
    return v;
}