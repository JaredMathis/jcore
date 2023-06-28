import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_reverse } from '../reverse.mjs';
import { list_add_multiple } from '../add/multiple.mjs';
export function list_reversed_get(list) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let list_reversed = [];
    list_add_multiple(list_reversed, list);
    list_reverse(list_reversed);
    return list_reversed;
    metadata([]);
}