import { metadata } from '../../../metadata.mjs';
import { number_zero_is } from '../../../number/zero/is.mjs';
import { not } from '../../../not.mjs';
export function integer_zero_not_is(a) {
    let v = number_zero_is(a);
    let v_2 = not(v);
    return v_2;
    metadata([]);
}