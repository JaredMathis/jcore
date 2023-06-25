import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { defined_is } from '../defined/is.mjs';
export function boolean_is(b) {
    let v_2 = 1;
    assert_arguments_count(arguments, v_2);
    let v = defined_is(b);
    assert(v);
    return b === true || b === false;
}