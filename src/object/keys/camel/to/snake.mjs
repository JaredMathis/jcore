import { object_keys_to_generic } from '../../to/generic.mjs';
import { string_case_snake_to_camel } from '../../../../string/case/snake/to/camel.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function object_keys_camel_to_snake(options) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_map_key = string_case_camel_to_snake;
    return object_keys_to_generic(options, lambda_map_key);
}