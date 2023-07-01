import { string_case_pascal_to_snake } from '../../../../string/case/pascal/to/snake.mjs';
import { object_keys_to_generic } from '../../to/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function object_keys_camel_to_snake(options) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_map_key = string_case_pascal_to_snake;
    return object_keys_to_generic(options, lambda_map_key);
}