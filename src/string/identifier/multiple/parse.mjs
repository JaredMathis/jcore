import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_split } from '../../split.mjs';
export function string_identifier_multiple_parse(values) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = string_split(values, ',');
    return result;
}