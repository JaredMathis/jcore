import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { null_is } from '../is.mjs';
export function null_not_is(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = null_is(result);
    let v_2 = not(v);
    return v_2;
    metadata([]);
}