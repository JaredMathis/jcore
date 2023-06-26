import { metadata } from '../../metadata.mjs';
import { string_comma } from '../comma.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_split } from '../split.mjs';
export function string_split_comma(values) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = string_comma();
    let v_2 = string_split(values, v);
    return v_2;
    metadata([]);
}