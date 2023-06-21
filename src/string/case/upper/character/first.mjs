import { string_take } from '../../../take.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_get } from '../../../get.mjs';
import { string_combine } from '../../../combine.mjs';
export function string_case_upper_character_first(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let first = string_get(value, 0);
    let remaining = string_take(value, 1);
    let result = string_combine(first, remaining);
    return result;
}