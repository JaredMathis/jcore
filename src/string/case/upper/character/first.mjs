import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { string_to_case_upper } from '../../../to/case/upper.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_to_list } from '../../../to/list.mjs';
export function string_case_upper_character_first(first) {
    arguments_assert(arguments, [arguments_assert_todo]);
    string_to_list(first);
    let result = string_to_case_upper(first);
    return result;
}