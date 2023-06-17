import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { defined_is } from '../defined/is.mjs';
export function boolean_is(b) {
    assert_arguments_count(arguments, 1);
    assert(defined_is(b));
    return b === true || b === false;
}