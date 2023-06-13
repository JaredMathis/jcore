import { function_add_string_prefix_generic } from '../generic.mjs';
import { string_case_camel_to_snake } from '../../../../../string/case/camel/to/snake.mjs';
export async function function_add_string_prefix_camel_generic(value, prefix) {
    let snake = string_case_camel_to_snake(value);
    await function_add_string_prefix_generic(prefix, snake, value);
}