import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_take } from '../../take.mjs';
import { list_length_subtract_1 } from '../../length/subtract/1.mjs';
export function list_take_without_last(statements) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = list_length_subtract_1(statements);
    let remaining = list_take(statements, v);
    return remaining;
    metadata([]);
}