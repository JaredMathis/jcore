import { equal } from '../equal.mjs';
import { assert } from '../assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { defined_is } from '../defined/is.mjs';
export function boolean_is(b) {
    assert_arguments_count(arguments, 1);
    let v = defined_is(b);
    assert(v);
    return equal(b, true) || equal(b, false);
}