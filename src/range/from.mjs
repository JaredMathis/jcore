import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { range } from '../range.mjs';
import { subtract } from '../subtract.mjs';
import { assert } from '../assert.mjs';
export function range_from(from, to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    assert(from <= to);
    let difference = subtract(from, to);
    return range();
}