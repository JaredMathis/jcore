import { number_zero_is } from '../../../number/zero/is.mjs';
import { not } from '../../../not.mjs';
export function integer_zero_not_is(a) {
    return not(number_zero_is(a));
}