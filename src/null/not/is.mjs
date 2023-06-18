import { not } from '../../not.mjs';
import { null_is } from '../is.mjs';
export function null_not_is(result) {
    let v = null_is(result);
    let v_2 = not(v);
    return v_2;
}