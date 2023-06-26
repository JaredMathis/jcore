import { and } from '../and.mjs';
import { equal } from '../equal.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { todo } from '../todo.mjs';
import { defined_is } from '../defined/is.mjs';
export function integer_is(candidate) {
    arguments_assert(arguments, [defined_is]);
    let v_2 = `Maybe revisit after learning about JS number nuance - what about Infinity, NaN, etc.`;
    todo(v_2);
    let v_3 = Number.isFinite(candidate);
    let v_5 = Math.floor(candidate);
    let v_4 = equal(v_5, candidate);
    let v = and(v_3, v_4);
    return v;
    metadata([]);
}