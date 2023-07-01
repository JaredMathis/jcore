import { metadata } from '../../../../../metadata.mjs';
import { boolean_is } from '../../../../../boolean/is.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_add_string_prefix_generic } from '../generic.mjs';
import { string_case_pascal_to_snake } from '../../../../../string/case/pascal/to/snake.mjs';
export async function function_add_string_prefix_pascal_generic(prefix, camel_cased, only_if_needed) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        boolean_is
    ]);
    let snake = string_case_pascal_to_snake(camel_cased);
    let v = await function_add_string_prefix_generic(prefix, snake, camel_cased, only_if_needed);
    return v;
    metadata([]);
}