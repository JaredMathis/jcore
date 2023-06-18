import { integer_zero_is } from '../is.mjs';
import { not } from '../../../not.mjs';
export function integer_zero_not_is(a) {
    return not(integer_zero_is(a));
}