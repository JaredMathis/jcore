import { metadata } from '../metadata.mjs';
import { equal } from '../equal.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function object_is(v) {
    arguments_assert(arguments, [defined_is]);
    let v_2 = typeof v;
    let v_3 = 'object';
    let v_4 = equal(v_2, v_3);
    return v_4;
    metadata([]);
}