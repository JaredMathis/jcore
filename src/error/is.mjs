import { and } from '../and.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function error_is(e) {
    arguments_assert(arguments, [defined_is]);
    return and(and(e, e.stack), e.message);
}