import { metadata } from '../../metadata.mjs';
import { integer_zero_not_is } from '../zero/not/is.mjs';
import { integer_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
export function integer_divide_evenly(a, b) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    let v = integer_zero_not_is(b);
    assert(v);
    let result = a / b;
    let v_2 = integer_is(result);
    assert(v_2);
    return result;
    metadata([]);
}