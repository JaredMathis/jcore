import { string_skip } from '../../../skip.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_get } from '../../../get.mjs';
import { string_combine } from '../../../combine.mjs';
import { string_to_case_upper } from '../../../to/case/upper.mjs';
export function string_case_upper_character_first(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let first = string_get(value, 0);
    let first_upper = string_to_case_upper(first)
    let remaining = string_skip(value, 1);
    let result = string_combine(first_upper, remaining);
    return result;
}