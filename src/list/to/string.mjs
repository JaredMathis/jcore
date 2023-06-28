import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_join } from '../join.mjs';
export function list_to_string(prefixes) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = ',';
    let v_2 = list_join(prefixes, v);
    return v_2;
    metadata([]);
}