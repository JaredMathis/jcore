import { metadata } from '../metadata.mjs';
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
    let v_3 = from <= to;
    assert(v_3);
    let difference = subtract(to, from);
    let value = add_1(difference);
    let ranged = range(value);
    let v_4 = function v(r) {
        let v_2 = add(r, from);
        return v_2;
    };
    let mapped = list_map(ranged, v_4);
    return mapped;
    metadata([]);
}