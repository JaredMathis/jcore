import { metadata } from '../../../../metadata.mjs';
import { function_add_js_node_type_snake } from './type/snake.mjs';
import { string_case_pascal_to_snake } from '../../../../string/case/pascal/to/snake.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_js_node_type(camel_case) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let snake = string_case_pascal_to_snake(camel_case);
    let v = await function_add_js_node_type_snake(snake);
    return v;
    metadata([]);
}