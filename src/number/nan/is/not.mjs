import { not } from '../../../not.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
export function number_nan_is_not(result) {
    arguments_assert(arguments, [defined_is]);
    let v = isNaN(result);
    let v_2 = not(v);
    return v_2;
    metadata([]);
}