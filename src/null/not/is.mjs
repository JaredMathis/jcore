import { not } from '../../not.mjs';
import { null_is } from '../is.mjs';
export function null_not_is(result) {
    return not(null_is(result));
}