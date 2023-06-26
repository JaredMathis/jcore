import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { equal } from '../equal.mjs';
import { function_is } from '../function/is.mjs';
import { defined_is } from '../defined/is.mjs';
export function equal_by(map, a, b) {
    arguments_assert(arguments, [
        function_is,
        defined_is,
        defined_is
    ]);
    let v = map(a);
    let v_2 = map(b);
    let v_3 = equal(v, v_2);
    return v_3;
    metadata([]);
}