import { metadata } from '../metadata.mjs';
import { and } from '../and.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function error_is(e) {
    arguments_assert(arguments, [defined_is]);
    let v_4 = e.stack;
    let v = and(e, v_4);
    let v_2 = e.message;
    let v_3 = and(v, v_2);
    return v_3;
    metadata([]);
}