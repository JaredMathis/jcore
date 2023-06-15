import { add } from '../add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { range } from '../range.mjs';
import { subtract } from '../subtract.mjs';
import { assert } from '../assert.mjs';
import { add_1 } from '../add/1.mjs';
import { list_map } from '../list/map.mjs';
export function range_from(from, to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    assert(from <= to);
    let difference = subtract(from, to);
    let value = add_1(difference);
    let ranged = range(value);
    let mapped = list_map(ranged, r => add(r, from));
    return mapped;
}