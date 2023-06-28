import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_merge_filtered } from '../merge/filtered.mjs';
export function object_map_generic(object, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = {};
    let v = object_merge_filtered(object, lambda, v_2);
    return v;
    metadata([]);
}