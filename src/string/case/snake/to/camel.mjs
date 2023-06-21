import { js_identifier_parts_to } from '../../../../js/identifier/parts/to.mjs';
import { list_join } from '../../../../list/join.mjs';
import { function_name_separator } from '../../../../function/name/separator.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_case_snake_to_camel(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = js_identifier_parts_to(input);
    let v = function_name_separator();
    let snake = list_join(parsed, v);
    return snake;
}