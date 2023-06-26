import { metadata } from '../../../../metadata.mjs';
import { list_join } from '../../../../list/join.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_separator } from '../../../../function/name/separator.mjs';
import { string_case_camel_parse } from '../parse.mjs';
export function string_case_camel_to_snake(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = string_case_camel_parse(input);
    let v = function_name_separator();
    let snake = list_join(parsed, v);
    return snake;
    metadata([]);
}