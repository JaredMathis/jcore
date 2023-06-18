import { add } from '../add.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { range } from '../range.mjs';
import { subtract } from '../subtract.mjs';
import { assert } from '../assert.mjs';
import { add_1 } from '../add/1.mjs';
import { list_map } from '../list/map.mjs';
import { integer_is } from '../integer/is.mjs';
export function range_from(from, to) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    assert(from <= to);
    let difference = subtract(to, from);
    let value = add_1(difference);
    let ranged = range(value);
    let mapped = list_map(ranged, function v(r) {
        return add(r, from);
    });
    return mapped;
}