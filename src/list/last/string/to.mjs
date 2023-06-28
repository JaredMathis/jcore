import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { string_to } from '../../../string/to.mjs';
import { list_last } from '../../last.mjs';
export function list_last_string_to(required_bys) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let last = list_last(required_bys);
    let last_string = string_to(last);
    return last_string;
    metadata([]);
}